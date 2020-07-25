import npcs from "../../content/adventure/wild-rat-chase/wild-rat-chase-npcs.json"


var INITIAL_STATE = npcs

export default function (state = INITIAL_STATE, action) {
  let npc, updatedNpcs, npcs
  switch (action.type) {
    case "CREATE_NPC":
      npc = action.payload
      return [npc, ...state]
    case "UPDATE_NPC":
      npc = action.payload
      updatedNpcs = state.map((n)=> n.id === npc.id ? npc : n)
      localStorage.setItem('npcs', JSON.stringify(updatedNpcs))
      return updatedNpcs
    case "DELETE_NPC":
      npc = action.payload
      updatedNpcs = state.filter((n)=> n.id !== npc.id)
      localStorage.setItem('npcs', JSON.stringify(updatedNpcs))
      return updatedNpcs
    case "LOAD_NPCS":
      npcs = action.payload
      return npcs
    case "LOAD_NPC":
      npc = action.payload
      var randomId = Math.random().toString(36).substring(7)
      npc.id = randomId
      return [npc, ...state]
    default:
      return state
  }
}
