import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'

const Attractions = (props) => {
  const [attractions, setAttractions] = React.useState(null);
  const [changeNumber, setChangeNumber] = React.useState(0);
  const [count, setCount] = React.useState([]);

 
  if (props.attraction.length > 0 && !attractions) { 
    setAttractions([...props.attraction])
    setChangeNumber(changeNumber +1)
    const zero = [] 
    props.attraction.forEach(() => zero.push(0))
    setCount(count.concat(zero))//concat takes whats in count and adds on the list of zero created in line 14
  
  }


const increment = (index) => {
     
 setCount([...count.slice(0, index), count[index]+ 1, ...count.slice(index + 1, count.length)] )
  
}

//3 diff pieces: first take everything in the array up to the index but not including and puts it into count(index of the button)
//2nd: new value where we increment the correct count index position for each individual attraction
//3rd: take everything affter the index and keep for the array
//takes current count array and whatever index we tell it to update it adds 1 to that array.

 
  const renderData = () => {
    if (attractions) { 
     return(      
       <div>
         <button onClick={handleSort}>Sort</button>
        {attractions.map((attraction, index) =>
         <div className="attraction" key={attraction.id}> 
            <img width={400} height={400} src={attraction.url}  alt="attraction" />
              <Link className="link-text" to={`/attractions/${attraction.id}`}>{attraction.name}</Link>
              <button id={index} onClick={()=>{increment(index)} } >Click to Vote </button> 
              <p>You clicked: {count[index]} times</p>
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
   setAttractions(attractions.sort((a,b) => (a.name > b.name) ? 1 : -1))
   setChangeNumber(changeNumber +1)}  
   return (
   <div> {renderData()}</div>
   )}


       
export default Attractions;

