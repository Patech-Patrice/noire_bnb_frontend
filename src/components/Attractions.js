import React from 'react';
import {Link} from 'react-router-dom'



const Attractions = (props) => {
    //console.log(props)
   if (props.attraction.length > 0) {
    return(      
      <div>
       {props.attraction.map(attraction =>
        <div className="attraction" key={attraction.id}>
          <img width={400} height={400} src={attraction.url}  alt="attraction" />
           <Link className="link-text" to={`/attractions/${attraction.id}`}>{attraction.name} </Link>
        </div> )}
      </div>
    )}
    else {
     return (
   <div> Loading</div> 
    )
     }
    }
   
export default Attractions;

   


     
        


     
        


            
             
       


 
   

    