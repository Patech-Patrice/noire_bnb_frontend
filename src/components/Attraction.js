import React from 'react'
import CommentsContainer from '../containers/CommentsContainer'
import CommentInput from '../components/CommentInput.js';

//won't let me import CommentInput relative path keeps throwing error
const Attraction = (props) => {
  //console.log(props)
  let attraction = props.attraction[props.match.params.id - 1]
 //console.log(props)
    //let attraction = props.attraction.filter(attraction => attraction.id == props.match.params.id)[0]
    //console.log(attraction)
    if (attraction) {
      return(
        <h1 style={{backgroundColor: "red"}}>
          <CommentInput attractionId={attraction.id}/>
             <p1>{attraction ? attraction.name : null}</p1><br/><br/>
               <img width={500} height={500} className="img"  src={attraction.url} /><br/><br/>
               {attraction ? attraction.description : null}<br/>
               <CommentsContainer attractionId={attraction.id}/><br/><br/>
          </h1>
      )
     }
     else {
     return (<h1>Loading</h1>)
     }
 }
    
  

export default Attraction;


 

  
   
  