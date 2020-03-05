export default (state = {attractions: []}, action) => {
    switch (action.type) {
        case "FETCH_ATTRACTIONS":
        return {attractions: action.payload}
          //return state
        default:
          return state
      }
    }

   