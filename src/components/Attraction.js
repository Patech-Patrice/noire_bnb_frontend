import React from 'react';
import {Route, Link} from 'react-router-dom'
import AttractionCard from './AttractionCard'
import {Card} from 'react-bootstrap';

const Attraction = (props) => {
    console.log(props)
   if (props.attraction.length > 0) {
    return(



        <Card className="bg-dark text-white" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.attraction.url} />
        <Card.Body>
        <div>
       
       {props.attraction.map(attraction =>
        <li key={attraction.id}>
          <h3>{attraction.name} </h3>
          
          <Card.Subtitle >  {attraction.description}    </Card.Subtitle> 
           <Card.Img src={attraction.url} alt="Card image"/>
        </li> )}
        <div className="col s12">
          <div className="image">
             
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


     
        



