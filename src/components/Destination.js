import React , { Component }from 'react';
import {Route, Link} from 'react-router-dom'
import DestinationCard from './DestinationCard'
import {Card, Button, Form, Navbar} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
//props creates an object of all destinations to be passed in an argument
//responsible for rendering a list of destinations


const Destination = (props) => {
   //console.log(props.destination)
   if (props.destination.length > 0) {
    return(
        <Card className="bg-dark text-white" style={{ width: '18rem' }}>
            
        <div>
    
        {props.destination.map(destination =>
        <li key={destination.id}>

         
<Card.Subtitle className="mb-2 text-muted"> {destination.state} - {destination.country}</Card.Subtitle>
          <Card.Img  src={destination.url} alt="Card image" />  
          <Card.ImgOverlay>
          <Card.Title><Link to={`/destinations/${destination.id}`}>{destination.city}  </Link></Card.Title>
    <Card.Text>
    {destination.state} - {destination.country}
    </Card.Text>
    <Card.Text>{destination.city}</Card.Text>
  </Card.ImgOverlay>

 
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




   