import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchAttractions} from '../actions/fetchAttractions';
import Attractions from '../components/Attractions.js';
import Attraction from '../components/Attraction.js';
import CommentInput from '../components/CommentInput'

class AttractionsContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchAttractions()
    }

    render() {
        if (this.props.attraction) {
        return (
            <div className="attractions-container">
               <Switch>
               <Route path='/comments/new' component={CommentInput}/>
                <Route path='/attractions/:id' render={(routerProps) => <Attraction {...routerProps} attraction={this.props.attraction}/>}/> 
                <Route path='/attractions' render={(routerProps) => <Attractions {...routerProps} attraction={this.props.attraction}/>}/>
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
      attraction: state.attraction 
    }
  }

export default connect(mapStateToProps, {fetchAttractions})(AttractionsContainer)