//video 7 9:27
export const addComment = (comment, attractionId) => {
  console.log('C');
    return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/attractions/${attractionId}/comments`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(comment)
        })
        .then(response => response.json())
        .then(comment => {
          console.log('D');
          dispatch({type: 'ADD_COMMENT', payload: comment})})
      }
  
    }
