import React, {Component} from 'react'


import {Card, Form, Navbar} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
//here we will show the destination with a link to the attraction

const Destination = (props) => {
    console.log(props)
    let destination = props.destination[props.match.params.id - 1]
        //console.log(props)
    //let destination = props.destination.filter(destination => destination.id == props.match.params.id)[0]
    console.log(destination)
     return(
        
        <li>
            {props.destination.state}
            {destination ? destination.country : null} - {destination ? destination.country : null}
             <Image src={props.destination.url}  />
     

            <h1>Destination</h1>
            <h1>Destination</h1>
            </li>

        
     )
    }
   
 
     export default Destination;
 
 
 