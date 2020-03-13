import React from 'react';
import {Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container' 
import ListGroup from 'react-bootstrap/ListGroup'


const Comment = (props) => {

    //console.log(props)
   
     return(
   
         
         <li key={props.comment.id}>
           <h4> {props.comment.content} </h4> <br/>
         </li>
       
        
     )
     }

export default Comment