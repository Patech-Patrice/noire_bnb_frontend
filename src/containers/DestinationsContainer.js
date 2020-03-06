import React from 'react';
import {connect} from 'react-redux';
import {fetchDestinations} from '../actions/fetchDestinations';
import Destination from '../components/Destination.js';
//import Destination from '../components/Destination.js';
import DestinationList from '../components/DestinationList.js';
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
                <h1>Destinations will go here</h1>
                <DestinationList  />
                <Destination destination ={this.props.destination} />
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