


export default function destinationReducer(state = {destination: []}, action) {
  //debugger;
    switch (action.type) {
        case 'FETCH_DESTINATIONS':
          //console.log(action.payload)
          //debugger;
          return  action.payload
          //return state
          //return {
            // destination: action.payload}
        default:
          return state
          //debugger;
      }
    }


 