//video 7 9:27
export const addComment = (data) => {

    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/comments', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(comment => dispatch({type: 'ADD_COMMENT', payload: comment}))
    }
  
  }