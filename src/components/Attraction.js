import React from 'react';
import {Route, Link} from 'react-router-dom'
import AttractionCard from './AttractionCard'

const Attraction = (props) => {
    //sconsole.log(props)
   if (props.attraction.length > 0) {
    return(
        <div>
       
       {props.attraction.map(attraction =>
        <li key={attraction.id}><AttractionCard />
          <Link to={`/attractions/${attraction.id}`}>{attraction.name} - {attraction.description} - {attraction.destination_id}</Link>
        </li> )}
        </div>
    )}
    else {
     return (
   <div> Loading</div> 
    )
     }
    }
   

    export default Attraction;
