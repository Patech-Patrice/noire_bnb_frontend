import React , { Component }from 'react';
import {Route, Link} from 'react-router-dom'


import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-grid-system';
import Button from 'react-bootstrap/Button';


//props creates an object of all destinations to be passed in an argument
//responsible for rendering a list of destinations
import styles from 'react'

const Destinations = (props) => {
   //console.log(props.destination)
   if (props.destination.length > 0) {
    return(
      <Container>
         {props.destination.map(destination =>
        <ul key={destination.id}>
         <Link to={`/destinations/${destination.id}`}>{destination.state} - {destination.country}- {destination.city}</Link>
         <Image style={{height:'50%', width:'50%'}} src={destination.url}  alt="destination" />
        </ul>  )}
        </Container>
    )}
    else {
     return (
   <div> Loading</div> 
    )
     }
    }
  
    export default Destinations;



           




   