/*
   node ./process-powers.mjs abilities
   node ./process-powers.mjs spells
   node ./process-powers.mjs magicItems
   node ./process-powers.mjs equipment

   node ./process-powers.mjs abilities && node ./process-powers.mjs spells && node ./process-powers.mjs magicItems && node ./process-powers.mjs equipment
   
 */

import fs from 'fs'

const fileName = process.argv[2]
const powerType = process.argv[3]

const fileData = fs.readFileSync(`./powers/${fileName}.md`).toString()

const categories = fileData.split('---')


var categoriesJson = []
categories.map((category)=>{
  var [title, powers] = getFirstLine(category.trim())
  title = title.substring(2) // remove hashtags
  powers = powers.split('\n\n').map(s => s.trim())

  var categoryJson = { title, powers: []}
  powers.map((power)=>{
    var [powerHeader, description] = getFirstLine(power)
    // ## Title | EP | XP | Dice | Damage | Requirements | Rarity
    var values = powerHeader.split('|').map(s => s.trim())
    var [title, ep, xp, bonusDice, damage, requirements, rarity] = values
    title = title.substring(3) // remove hashtags
    //console.log([title, ep, xp, bonusDice, requirements])
    var powerJson = {
      title, ep, xp, bonusDice, damage, requirements, description, rarity,
      // "spells", where to put it inside the sheet, used when adding powers to the sheet
      section: fileName,
      //category,
    }
    categoryJson.powers.push(powerJson)
  })
  categoriesJson.push(categoryJson)
})

var outputText = JSON.stringify(categoriesJson,null, 2)
fs.writeFile(`./json/powers/${fileName}.json`, outputText, 'utf8', ()=>{})

function getFirstLine(text) {
  var lines = text.split("\n");   // split all lines into array
  var firstline = lines.shift();   // read and remove first line
  var rest = lines.join("\n");     // re-join the remaining lines
  return [firstline, rest]
}
