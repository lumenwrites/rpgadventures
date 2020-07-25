/*
   node ./process-sheets.mjs
 */

import fs from 'fs'

/* Powers are stored in google sheet:
   https://docs.google.com/spreadsheets/d/1NavEaDLO-hIivw5tVXV-_dLA8G_FXkqv_DWqxudT9sE/
   Exporting google sheet to json:
   http://blog.pamelafox.org/2013/06/exporting-google-spreadsheet-as-json.html
   Export JSON for All Sheets, save it as powers.json
 */
var data = fs.readFileSync(`./powers/powers.json`)
data = JSON.parse(data)

/* Loop through each sheet (abilities, spells, magicItems, equipment) */
for (var powerType in data) {
  // ignore the boilerplate sheet
  if (powerType === 'boilerplate') continue

  /* Process powers */
  var powers = data[powerType]
  /* Remove  powers without title/description (drafts in google sheets) */
  powers = powers.filter(p => p.title && p.description)
  /* Edit fields */
  powers = powers.map(p => {
    /* Remove accidental spaces */
    for (var key in p) {
      if (typeof p[key] === "string") p[key] = p[key].trim()
    }

    if (p.level) {
      p.title = `${p.title} (${p.level})` // Athletics (Adept)
    }
    p.bonusDice = p.dice //rename the field
    p.damage = p.dmg //rename the field
    /* Requirements */
    if (p.req) {
      p.requirements = p.req
      if (p.reqlvl) {
	p.requirements += ` (${p.reqlvl})`
      }
    }
    /* abilities, spells, magicItems, equipment */
    p.section = powerType

    /* Delete unused and empty fields */
    var unusedFields = ['level','req','reqlvl','dice','dmg']
    for (var key in p) {
      if (!p[key])  delete p[key] // delete empty fields
      if (unusedFields.includes(key))  delete p[key] // delete unused fields
    }
    
    return p
  })



  //console.log(powers[3],null, 2)

  /* Create list of categories */
  const categorySet = new Set()
  powers.map(p => {
    categorySet.add(p.category)
  })
  /* Add powers to each category */
  const categoriesJson = []
  categorySet.forEach(categoryTitle => {
    var categoryJson = {
      title: categoryTitle,
      powers: powers.filter(p => p.category == categoryTitle)
    }
    categoriesJson.push(categoryJson)
  })


  var outputText = JSON.stringify(categoriesJson, null, 2)
  fs.writeFile(`./json/powers/${powerType}.json`, outputText, 'utf8', ()=>{})
}
