import React from 'react';
import {Card} from 'react-bootstrap';

const Comment = (props) => {

    //console.log(props)
   
     return(
        
         <div>
        {props.comment.id} - 
         <li key={props.comment.id}>
        
           <div > {props.comment.content} </div> 
         </li> 
         </div>
         
     )
     
      
     }

export default Comment