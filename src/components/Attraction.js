import React from 'react'
import {Redirect} from 'react-router-dom'
import DestinationsContainer from '../containers/DestinationsContainer'
import CommentsContainer from '../containers/CommentsContainer'

const Attraction = (props) => {
  //console.log(props)
  let attraction = props.attraction[props.match.params.id - 1]
 //console.log(props)
    //let attraction = props.attraction.filter(attraction => attraction.id == props.match.params.id)[0]
    console.log(attraction)
  
    if (attraction) {
      return(
         <div>
            
              

              
              <h1>{attraction ? attraction.name : null}</h1>
               <h3>{attraction ? attraction.description : null}</h3>
               <img width={500} height={500} src={attraction.url}  />

              <CommentsContainer attraction_id={attraction.id}/><br/></div>
              

            
      )
     }
     else {
     return (<h1></h1>)
     }
 }
    
  




export default Attraction;


 

  
   
  