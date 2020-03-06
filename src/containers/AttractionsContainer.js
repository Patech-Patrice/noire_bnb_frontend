import React from 'react';
import Attractions from '../components/Attractions.js';
import AttractionList from '../components/AttractionList.js';
import {connect} from 'react-redux';
import {fetchAttractions} from '../actions/fetchAttractions';


class AttractionsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchAttractions()
    }

    render() {
        return (
            <div>
                <AttractionList />
                <Attractions attractions={this.props.attractions} />
               
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      attractions: state.attractions 
    }
  }

export default connect(mapStateToProps, {fetchAttractions})(AttractionsContainer)