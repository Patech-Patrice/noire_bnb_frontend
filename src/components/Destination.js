import React , { Component }from 'react';
import {Route, Link} from 'react-router-dom'
import DestinationCard from './DestinationCard'

//props creates an object of all destinations to be passed in an argument
//responsible for rendering a list of destinations


const Destination = (props) => {
   //console.log(props.destination)
   if (props.destination.length > 0) {
    return(
        <div>
        <form >
            <input placeholder="search destination">
            </input>
            <button type="search">Search Destination</button>
        </form>
        
        {props.destination.map(destination =>
        <li key={destination.id}><DestinationCard/>
          <Link to={`/destinations/${destination.id}`}>{destination.state} - {destination.city} - {destination.country} - {destination.url}</Link>
          <div className="col s12">
          <div className="image">
              image
              <img src={destination.url} />
              </div>
              </div>
        </li> )}
      
       
        </div>
    )}
    else {
     return (
   <div> Loading</div> 
    )
     }
    }
   

    export default Destination;




   