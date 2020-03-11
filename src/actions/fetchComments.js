export function fetchComments() {
    return(dispatch) => {
    fetch("http://localhost:3000/api/v1/comments", {
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
//could change api backend to fetch comments with attraction using include (returning an attraction to include comment)
//only fetch comments once we know what attraction it is
//nest routes on backend for second option
//check out fastjson serializer