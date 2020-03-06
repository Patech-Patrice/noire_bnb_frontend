import React , { Component }from 'react';
//import {Route, Link} from 'react-router-dom'
//import Destination from './Destination'

//props creates an object of all destinations to be passed in an argument
//responsible for rendering a list of destinations


const Destination = (props) => {
   console.log(props.destination)
    return(
        <div>
        <form >
            <input placeholder="search destination">
            </input>
            <button type="search">Search Destination</button>
        </form>
       

        </div>
    )}
    Destination.getInitialProps = async () => {
        console.log('get initialprops');
    };

    export default Destination;
