/*
   node ./process-prompts.mjs goals
   node ./process-prompts.mjs HCs
   node ./process-prompts.mjs complications
   node ./process-prompts.mjs villains
   node ./process-prompts.mjs villain-motivations
   node ./process-prompts.mjs movie-characters
   node ./process-prompts.mjs action-adventure
   node ./process-prompts.mjs exploration
   node ./process-prompts.mjs social
   node ./process-prompts.mjs mystery
   node ./process-prompts.mjs stealth
   node ./process-prompts.mjs villain-moves
   
   
 */

import fs from 'fs'

const fileName = process.argv[2]
const powerType = process.argv[3]

const fileData = fs.readFileSync(`./prompts/${fileName}.md`).toString()

const prompts = fileData.split('\n\n')

const promptsJson = prompts.map((prompt)=> prompt.trim())

var outputText = JSON.stringify(promptsJson, null, 2)

fs.writeFile(`./json/prompts/${fileName}.json`, outputText, 'utf8', ()=>{})




















var categories = {
  goals: "Adventure Goal",
}
