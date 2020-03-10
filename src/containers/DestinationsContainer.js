import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchDestinations} from '../actions/fetchDestinations';
import Destinations from '../components/Destinations.js';
import Destination from '../components/Destination.js';

import {Card} from 'react-bootstrap';

class DestinationsContainer extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props)
    }
    componentDidMount(){
        this.props.fetchDestinations();
        //console.log(this.props)
        
    }
    render() {
        if (this.props.destination) {
        return (
            <div>
           <Route path='/destinations' render={(routerProps) => <Destinations {...routerProps} destination={this.props.destination}/>}/>
               <Route path='/destinations/:id' render={(routerProps) => <Destination {...routerProps} destination={this.props.destination}/>}/>   
            </div>
             )}
             else {
              return (
            <div> Loading</div> 
             )
              }
        }

}

const mapStateToProps = state => {
    return {
      destination: state.destination 
    }
  }

export default connect(mapStateToProps, {fetchDestinations})(DestinationsContainer)