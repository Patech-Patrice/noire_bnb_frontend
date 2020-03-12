export function fetchComments(attractionId) {
    return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/attractions/${attractionId}/comments`, {
       method: "GET",
       headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     })
     .then(r => r.json())
     .then(data => dispatch({
        type: 'FETCH_COMMENTS',
        payload: data    
     }))
    }
}


//include another request to POST comment
