import React from 'react';
import Comment from '../components/Comment.js';
import {Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import {fetchComments} from '../actions/fetchComments';


class CommentsContainer extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props)
    }
    componentDidMount(){
        this.props.fetchComments()
    }

    render() {
        if (this.props.comment) {
        return (
            <div>
                
                <Comment comment={this.props.comment} />
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
      comment: state.comment
    }
  }

export default connect(mapStateToProps, {fetchComments})(CommentsContainer)