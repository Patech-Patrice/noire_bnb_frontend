import React from 'react';
import Destinations from '../components/Destinations.js';
import DestinationList from '../components/DestinationList.js';
import {connect} from 'react-redux';
import {fetchDestinations} from '../actions/fetchDestinations';



class DestinationsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchDestinations()
    }

    render() {
        return (
            <div>
                <DestinationList />
                <Destinations />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      destinations: state.destinations 
    }
  }

export default connect(mapStateToProps, {fetchDestinations})(DestinationsContainer)