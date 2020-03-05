import React from 'react';
import Comments from '../components/Comments.js';
import CommentList from '../components/CommentList.js';
import {connect} from 'react-redux';
import {fetchComments} from '../actions/fetchComments';


class CommentsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchComments()
    }

    render() {
        return (
            <div>
                <CommentList />
                <Comments comments={this.props.comments} />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      comments: state.comments
    }
  }

export default connect(mapStateToProps, {fetchComments})(CommentsContainer)