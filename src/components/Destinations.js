import React from 'react';
import {Route, Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';

//props creates an object of all destinations to be passed in an argument
//responsible for rendering a list of destinations


const Destinations = (props) => {
   //console.log(props.destination)
   if (props.destination.length > 0) {
    return(
      
      <div>
     {props.destination.map(destination =>
        <ul className="destinations" key={destination.id}>
         <Image width={50} height={50} className="image" src={destination.url}  alt="destination"  />
        <Link to={`/destinations/${destination.id}`}>{destination.city} - {destination.state}</Link>
        </ul> )}   
       </div>
    
 
      
    )}
    else {
     return (
   <div> Loading</div> 
    )
     }
    }
  
    export default Destinations;

    //style the destinations class in app.css


  
   
      
   
  
   





           




   