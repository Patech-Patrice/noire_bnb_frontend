export function fetchDestinations() {
    return(dispatch) => {
    fetch("http://localhost:3000/api/v1/destinations", {
       method: "GET",
       headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     })
     .then(r => r.json())
     .then(data => dispatch({
        type: 'FETCH_DESTINATIONS',
        payload: data    
     }))
    }
}

