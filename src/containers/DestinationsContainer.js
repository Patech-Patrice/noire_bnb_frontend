import React from 'react';
import {connect} from 'react-redux';
import {fetchDestinations} from '../actions/fetchDestinations';
import Destination from '../components/Destination.js';
//import Destination from '../components/Destination.js';
import DestinationList from '../components/DestinationList.js';
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

     
               <Card>
                <DestinationList  />
                <Destination destination ={this.props.destination} />
                </Card>
             

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