import React , { Component }from 'react';
//import {Route, Link} from 'react-router-dom'
//import Destination from './Destination'

//props creates an object of all destinations to be passed in an argument
//responsible for rendering a list of destinations


const Destination = (props) => {
   console.log(props.destination)
   if (props.destination.length > 0) {
    return(
        <div>
        <form >
            <input placeholder="search destination">
            </input>
            <button type="search">Search Destination</button>
        </form>
        {props.destination.map(destination => <li key={destination.id}>{destination.state} - {destination.city} - {destination.country}</li>)}
        </div>
    )}
    else {
     return (
   <div> Loading</div> 
    )
     }
    }
   

    export default Destination;
