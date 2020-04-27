import React from 'react'



const Destination = (props) => {
 
  let destination = props.destination[props.match.params.id - 1]

    if (destination) {
      return(
        <h1 style={{backgroundColor: "red"}}>
          
             <p1>{destination ? destination.city : null}</p1><br/><br/>
               <img alt='' width={500} height={500} className="img"  src={destination.url} /><br/><br/>
               {destination ? destination.state : null}<br/>
               
          </h1>
      )
     }
     else {
     return (<h1>Loading</h1>)
     }
 }
    
  

export default Destination;





































// import React from 'react'
// import Attraction from '../components/Attraction.js';
// //import AtrractionsContainer from '../components/AttractionsContainer'
// import {Link} from 'react-router-dom';

// const Destination = (props) => {
//     console.log(props)
//     let destination = props.destination[props.match.params.id - 1] 
//     //let attraction = props.destination[props.match.params.id - 1]
//     //console.log(attraction) 
//        // console.log(props)
//     //let destination = props.destination.filter(destination => destination.id == props.match.params.id)[0]
//     console.log(destination)

  
//   if (destination) {
//      return(
//         <div>
//             <p>Destinations WishList</p>
//              <img width={500} height={500} src={destination.url}  />
//              <h1>{destination ? destination.city : null} - {destination ? destination.state : null}</h1>
//              <Link className="link-text" to={`destinations/`} >View attraction</Link>
          
            
//         </div>      
//         )
//     }
//     else {
//     return (<h1>Loading</h1>)
//     }
// }
   
 
// export default Destination;
 
