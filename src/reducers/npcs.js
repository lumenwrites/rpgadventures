import npcs from "../../content/adventure/wild-rat-chase/wild-rat-chase-npcs.json"

var INITIAL_STATE = npcs

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_MODAL":
      const modal = action.payload
      /* If this modal is already open I toggle it off. */
      const alreadyOpen = state.showModal === modal
      return { ...state, showModal: alreadyOpen ? false : modal }
    default:
      return state
  }
}
