import React from 'react';
import {Route, Link} from 'react-router-dom'

import {Card} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-grid-system';

const Attractions = (props) => {
    //console.log(props)
   if (props.attraction.length > 0) {
    return(


       
        <Card className="card" style={{ width: '18rem' }}>
       
      
        <div>
       
       {props.attraction.map(attraction =>
        <li key={attraction.id}>
          <h3>{attraction.name} </h3>
          
          <Card.Subtitle >  {attraction.description}    </Card.Subtitle> 
          <Image style={{height:'50%', width:'50%'}} src={attraction.url}  alt="attraction" />

         
        </li> )}
           
             
        </div>
       
  </Card>
    )}
    else {
     return (
   <div> Loading</div> 
    )
     }
    }
   

    export default Attractions;


     
        


     
        


            
             
       


 
   

    