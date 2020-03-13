import React from 'react';
import {Route, Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'


const Attractions = (props) => {
    //console.log(props)
   if (props.attraction.length > 0) {
    return(      
        <p>
       {props.attraction.map(attraction =>
        <div className="attraction" key={attraction.id}>
          <Image width={100}
        height={100}
        className="img" src={attraction.url}  alt="attraction" />
           <Link className="link-text" to={`/attractions/${attraction.id}`}>{attraction.name} </Link>
        </div> )}
        </p>
    )}
    else {
     return (
   <div> Loading</div> 
    )
     }
    }
   

    export default Attractions;

    //be sure to include attraction description on indivdual attraction with comment.


     
        


     
        


            
             
       


 
   

    