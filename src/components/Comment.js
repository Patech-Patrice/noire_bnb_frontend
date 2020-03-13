import React from 'react';


const Comment = (props) => {
    //console.log(props)
     return(      
         <li key={props.comment.id}>
           <h4> {props.comment.content} </h4> <br/>
         </li> 
     )
     }

export default Comment