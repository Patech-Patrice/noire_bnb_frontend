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
          <Image width={30}
        height={30}
        className="image" src={attraction.url}  alt="attraction" />
           <Link className="link-text" to={`/attractions/${attraction.id}`}><h4>{attraction.name} </h4></Link>
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


     
        


     
        


            
             
       


 
   

    