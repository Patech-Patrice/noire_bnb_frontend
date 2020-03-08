import React , { Component }from 'react';
import {Route, Link} from 'react-router-dom'
import DestinationCard from './Dcard'
import {Card, Button, Form, Navbar} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-grid-system';

//props creates an object of all destinations to be passed in an argument
//responsible for rendering a list of destinations
import styles from 'react'

const Destination = (props) => {
   //console.log(props.destination)
   if (props.destination.length > 0) {
    return(
      <Container>
         <Row sm={4}>
           
         {props.destination.map(destination =>
        <li key={destination.id}>
<Image style={{height:'50%', width:'50%'}} resizeMode="contain" src={destination.url}  alt="destination" />
             <h1 className="card-title">{destination.city}</h1>
          <h2 className="card-text">{destination.state} </h2>
          <h4 className="card-text">{destination.country} </h4>
        </li> )}
         </Row> 
        </Container>
    )}
    else {
     return (
   <div> Loading</div> 
    )
     }
    }

    
   

    export default Destination;



           




   