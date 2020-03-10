import React from 'react';
import {Route, Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'


const Attractions = (props) => {
    //console.log(props)
   if (props.attraction.length > 0) {
    return(      
        <div>
       {props.attraction.map(attraction =>
        <ul className="list" key={attraction.id}>
          <Image width={30}
        height={30}
        className="image" src={attraction.url}  alt="attraction" />
           <Link className="link-text" to={`/attractions/${attraction.id}`}><h4>{attraction.name} </h4></Link>
        </ul> )}
        </div>
    )}
    else {
     return (
   <div> Loading</div> 
    )
     }
    }
   

    export default Attractions;

    //be sure to include attraction description on indivdual attraction with comment.


     
        


     
        


            
             
       


 
   

    