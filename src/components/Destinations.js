import React, { Component } from 'react';
//props creates an object of all destinations to be passed in an argument
//responsible for rendering a list of destinations
const Destinations = (props) => {

    return(
        <div>
            {props.destinations.map(destination => <li key={destination.id}>{destination.city} - {destination.state} - {destination.country}</li> )}
        </div>
    )
}

export default Destinations