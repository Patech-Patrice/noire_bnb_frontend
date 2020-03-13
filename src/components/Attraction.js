import React from 'react'
import {Redirect} from 'react-router-dom'
import DestinationsContainer from '../containers/DestinationsContainer'
import CommentsContainer from '../containers/CommentsContainer'
import CommentInput from '/Users/patricedrayton/noire_bnb_frontend/src/components/CommentInput.js';
import {Route, Link} from 'react-router-dom'
//won't let me import CommentInput relative path keeps throwing error
const Attraction = (props) => {
  //console.log(props)
  let attraction = props.attraction[props.match.params.id - 1]
 //console.log(props)
    //let attraction = props.attraction.filter(attraction => attraction.id == props.match.params.id)[0]
    console.log(attraction)
  
    if (attraction) {
      return(
         

        <h1>
     <CommentInput attractionId={attraction.id}/>
              <h2>{attraction ? attraction.name : null}</h2><br/>
               <h6 >{attraction ? attraction.description : null}</h6><br/>
               <img className='img' alt="attraction" src={attraction.url} className="align-right"/><br/><br/>
               <CommentsContainer attractionId={attraction.id}/><br/><br/>
               </h1>
      )
     }
     else {
     return (<h1></h1>)
     }
 }
    
  




export default Attraction;


 

  
   
  