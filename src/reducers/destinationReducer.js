


export default function destinationReducer(state = {destinations: []}, action) {
  //debugger;
    switch (action.type) {
        case 'FETCH_DESTINATIONS':
          console.log(action.payload)
          //debugger;
          return  action.payload
          //return state
        default:
          return state
      }
    }


  //return {
         // destinations: action.payload}
          //return state
