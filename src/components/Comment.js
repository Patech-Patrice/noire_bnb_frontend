import React from 'react';
import {Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container' 
import ListGroup from 'react-bootstrap/ListGroup'


const Comment = (props) => {

    //console.log(props)
   
     return(
   
         <h3> 
           
            <ListGroup horizontal>
          <ListGroup.Item className='list'>
         
         <li key={props.comment.id}>
           <div > {props.comment.content} </div> 
         </li>
         </ListGroup.Item>
    </ListGroup>
   
         </h3>
       
         
     )
     
      
     }

export default Comment