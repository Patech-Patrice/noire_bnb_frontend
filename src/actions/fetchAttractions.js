export function fetchAttractions() {
    return(dispatch) => {
    fetch("http://localhost:3000/api/v1/attractions", {
       method: "GET",
       headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     })
     .then(r => r.json())
     .then(data => dispatch({
        type: 'FETCH_ATTRACTIONS',
        payload: data    
     }))
    }
}

//export const fetchAttractions = attractions => {
  //  return {
    //    type: "FETCH_ATTRACTIONS",
      ///  attractions
    //}
//}

