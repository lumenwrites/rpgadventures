import npcs from "../../content/adventure/wild-rat-chase/wild-rat-chase-npcs.json"


var INITIAL_STATE = npcs

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CREATE_NPC":
      var npc = action.payload
      return [npc, ...state]
    case "UPDATE_NPC":
      var npc = action.payload
      var updatedNpcs = state.map((n)=> n.id === npc.id ? npc : n)
      return updatedNpcs
    case "DELETE_NPC":
      var npc = action.payload
      var updatedNpcs = state.filter((n)=> n.id !== npc.id)
      return updatedNpcs
    default:
      return state
  }
}
