export default (state = {comment: []}, action) => {
    switch (action.type) {
        case "FETCH_COMMENTS":
        return  action.payload
          //return state
        default:
          return state
      }
    }


    //include ADD_COMMENT to actions