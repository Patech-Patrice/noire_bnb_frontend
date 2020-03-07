import React from 'react';
import Attraction from '../components/Attraction.js';
import AttractionList from '../components/AttractionList.js';
import {connect} from 'react-redux';
import {fetchAttractions} from '../actions/fetchAttractions';


class AttractionsContainer extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props)
    }

    componentDidMount(){
        this.props.fetchAttractions()
    }

    render() {
        if (this.props.attraction) {
        return (
            <div>
                <h1>Attractions will go here</h1>
                <AttractionList />
                <Attraction attraction={this.props.attraction} />

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
      attraction: state.attraction 
    }
  }

export default connect(mapStateToProps, {fetchAttractions})(AttractionsContainer)