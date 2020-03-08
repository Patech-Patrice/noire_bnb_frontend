import React from 'react';
import Comment from '../components/Comment.js';
import CommentList from '../components/CommentList.js';
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
                <CommentList />
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