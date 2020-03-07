export default function attractionReducer(state = {attraction: []}, action) {
    switch (action.type) {
        case "FETCH_ATTRACTIONS":
          return  action.payload
          //return state
        default:
          return state
      }
    }


   