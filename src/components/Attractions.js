import React from 'react';
import {Link} from 'react-router-dom'

const Attractions = (props) => {
  const [attractions, setAttractions] = React.useState(null);
  const [changeNumber, setChangeNumber] = React.useState(0);
  
  console.log(attractions)

 
  if (props.attraction.length > 0 && !attractions) { 
    setAttractions([...props.attraction])
    setChangeNumber(changeNumber +1)
    //console.log(attractions)}
  }

  const renderData = () => {
    if (attractions) { 
     return(      
       <div>
         <button onClick={handleSort}>Sort</button>
         {console.log(attractions)}
        {attractions.map(attraction =>
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

  const handleSort = () => {
   console.log('hello')
   setAttractions(attractions.sort((a,b) => (a.name > b.name) ? 1 : -1))
   setChangeNumber(changeNumber +1)
   console.log(attractions) } 
    
   return (
   <div> {renderData()}</div>
   )}
export default Attractions;

//when using hook components to hold state, it has to be a plain object, not an array, in order to re-render to the dom.
//stateful components  
