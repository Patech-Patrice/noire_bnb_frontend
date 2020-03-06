export function fetchDestinations() {
 
    return(dispatch) => {
    fetch("http://localhost:3000/api/v1/destinations")
     .then(resp => resp.json())
     .then(destinations => dispatch({
        type: 'FETCH_DESTINATIONS',
        payload: destinations    
     }))
     .catch(error => console.log(error))
   }
}
    
   


