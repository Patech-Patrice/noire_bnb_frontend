import React from 'react';
import Comment from '../components/Comment.js';
import {connect} from 'react-redux';
import {fetchComments} from '../actions/fetchComments';


class CommentsContainer extends React.Component {
    componentDidMount(){
        this.props.fetchComments(this.props.attractionId)
    }

    render() {
        if (this.props.comment.length > 0) {
            //{console.log(this.props.comment)}
            let comment = this.props.comment.filter(c => c.attraction_id === this.props.attractionId)
            //{console.log(comment)}
        return (
            <div  className="comments-container "key={comment.id}>
                {comment.map(c => <Comment comment={c}/>)}
                <Comment comment={comment}/><br/>
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

//<CommentInput attraction={this.props.attraction}/><br/>
// <Comment comment={this.props.comment && this.props.attraction.comment}/>
