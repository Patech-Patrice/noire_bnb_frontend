import React, { setState } from 'react';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
   
   //props creates an object of all destinations to be passed in an argument
   
   const Destinations = (props) => {
      const [search, setSearch] = React.useState("");
      const [filteredDestinations, setFilteredDestinations] = React.useState([]);
      
     
    
      const handleSearch = () => {
         setFilteredDestinations(props.destination.filter( destination => {
           return (destination.city.toLowerCase().includes(search.toLowerCase()) ||  (destination.state.toLowerCase().includes(search.toLowerCase())) 
         )})
         )
      }

      function chooseOutput() {
         if (filteredDestinations.length > 0) {
         return (filteredDestinations.map(destination =>
            <ul className="destinations" key={destination.id}>
             <Image width={50} height={50} className="image" src={destination.url}  alt="destination"  />
            <Link to={`/destinations/${destination.id}`}>{destination.city} - {destination.state}</Link>
           
         </ul> )
         )}
         else{
            return (props.destination.map(destination =>
               <ul className="destinations" key={destination.id}>
                <Image width={50} height={50} className="image" src={destination.url}  alt="destination"  />
               <Link to={`/destinations/${destination.id}`}>{destination.city} - {destination.state}</Link>
                  <span onClick={() => props.destination.id}></span>
            </ul> ))
         }
      }
      if (props.destination.length > 0) {
       return(
         <div>
             <input
           type="text"
           placeholder="Search Destinations"
            onChange={ e => setSearch(e.target.value)}
         /><button onClick={handleSearch} >Submit</button>
         {chooseOutput()}
          </div>  
       )}
       else {
        return (
      <div> Loading</div> 
       )
        }
       }
     
       export default Destinations;





           




   