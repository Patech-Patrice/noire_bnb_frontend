import React from 'react';
import {Card} from 'react-bootstrap';

const Comment = (props) => {

    console.log(props)
    if (props.comment.length > 0) {
     return(
         <Card className="bg-dark text-white" style={{ width: '18rem' }}>
         <Card.Body>
         <div>
        {props.comment.map(comment =>
         <li key={comment.id}>
         {comment.desination_id}
           <Card.Subtitle > {comment.content} - {comment.desination_id}</Card.Subtitle> 
         </li> )}
         </div>
         </Card.Body>
   </Card>
     )}
     else {
      return (
    <div> Loading</div> 
     )
      }
     }

export default Comment