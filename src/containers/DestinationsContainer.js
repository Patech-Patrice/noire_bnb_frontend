import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchDestinations} from '../actions/fetchDestinations';
import Destinations from '../components/Destinations.js';
import Destination from '../components/Destination.js';

class DestinationsContainer extends React.Component {
   
    componentDidMount(){
        this.props.fetchDestinations();
        //console.log(this.props)
        
    }
    render() {
        if (this.props.destination) {
        return (
            <div className="destinations-container">
              <Switch>
                <Route path='/destinations/:id' render={(routerProps) => <Destination {...routerProps} destination={this.props.destination}/>}/> 
                <Route path='/destinations' render={(routerProps) => <Destinations {...routerProps} destination={this.props.destination}/>}/>
           </Switch>    
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