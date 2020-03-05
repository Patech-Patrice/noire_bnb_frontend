export default (state = {comments: []}, action) => {
    switch (action.type) {
        case "FETCH_COMMENTS":
        return {commentss: action.payload}
          //return state
        default:
          return state
      }
    }
