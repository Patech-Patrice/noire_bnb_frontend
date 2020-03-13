import React from 'react'
import {Link} from 'react-router-dom';

const Destination = (props) => {
    //console.log(props)
    let destination = props.destination[props.match.params.id - 1]
        //console.log(props)
    //let destination = props.destination.filter(destination => destination.id == props.match.params.id)[0]
    console.log(destination)
  
  if (destination) {
     return(
        <div>
            <p>Destinations WishList</p>
             <img width={500} height={500} src={destination.url}  />
             <h1>{destination ? destination.city : null} - {destination ? destination.state : null}</h1>
             <Link >View attraction</Link>
        </div>      
        )
    }
    else {
    return (<h1>Loading</h1>)
    }
}
   
 
export default Destination;
 
 
 