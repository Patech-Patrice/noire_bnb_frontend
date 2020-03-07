import React from 'react'
import {Redirect} from 'react-router-dom'
import DestinationsContainer from '../containers/DestinationsContainer'

const DestinationCard = (props) => {

  console.log(props)
  //let destination = props.destination.filter(destination => destination.id == props.match.params.id)[0]

  console.log('hello')
  
  if (props.length > 0) {
  return (

    <div>
      <h2>
        
      </h2>
     
     {props.destination}
      
    </div>
  )
  }
  else {
    return (
  <div> CANT LOAD CARD</div> 
   )
    }

}

export default DestinationCard


 

  
   
  