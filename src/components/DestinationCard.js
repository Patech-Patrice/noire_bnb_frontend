import React from 'react'
import {Redirect} from 'react-router-dom'


import DestinationsContainer from '../containers/DestinationsContainer'

const Destination = (props) => {

  console.log(props)
  
  //let destination = [];

  //console.log(destination)
  return (

    <div>
      <h2>
        {destination ? destination.city : null} - {destination ? destination.state : null} - {destination ? destination.country : null}
      </h2>
      <DestinationsContainer destination={destination}/><br/>
      
    </div>
  )


}

export default Destination


 

  
   
  