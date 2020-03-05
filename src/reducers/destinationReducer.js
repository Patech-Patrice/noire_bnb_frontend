export default function destinationReducer(state = {destinations: []}, action) {
    switch (action.type) {
        case "FETCH_DESTINATIONS":
        return {destinations: action.payload}
          //return state
        default:
          return state
      }
    }



