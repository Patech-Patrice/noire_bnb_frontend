import React , { Component }from 'react';
import {Route, Link} from 'react-router-dom'
import DestinationCard from './DestinationCard'
import {Card, Button, Form, Navbar, Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
//props creates an object of all destinations to be passed in an argument
//responsible for rendering a list of destinations


const Destination = (props) => {
   //console.log(props.destination)
   if (props.destination.length > 0) {
    return(
        
        <Card className="bg-dark text-white" style={{ width: '18rem' }}>
            
        <div >
       
        {props.destination.map(destination =>
        <li key={destination.id}>
         
         <Card.Subtitle > {destination.state} - {destination.country} - {destination.city}</Card.Subtitle>

          <Card.Img  src={destination.url} alt="Card image" />
          

 
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
   

    export default Destination;




   