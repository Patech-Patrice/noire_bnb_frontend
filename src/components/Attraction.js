import React from 'react';
import {Route, Link} from 'react-router-dom'
import AttractionCard from './AttractionCard'
import {Card} from 'react-bootstrap';

const Attraction = (props) => {
    console.log(props)
   if (props.attraction.length > 0) {
    return(



        <Card>
        <Card.Img variant="top" src={props.attraction.url} />
        <Card.Body>
        <div>
       
       {props.attraction.map(attraction =>
        <li key={attraction.id}>
          {attraction.name} - {attraction.description} - {attraction.destination_id}
        </li> )}
        <div className="col s12">
          <div className="image">
              image <img src={props.attraction.url}/>
              {console.log(props.url)}
              </div>
              </div>
             
        </div>
        </Card.Body>
  </Card>
    )}
    else {
     return (
   <div> Loading</div> 
    )
     }
    }
   

    export default Attraction;


     
        



