import React from 'react';
import Comment from '../components/Comment.js';
import {Route, Switch} from 'react-router-dom';
//import CommentInput from '../components/CommentInput'
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
        if (this.props.comment.length > 0) {
            //{console.log(this.props.comment)}
            let comment = this.props.comment.find(c => c.attraction_id = this.props.attraction_id)
            {console.log(comment)}
        return (
            <div>
                
                <Comment comment={comment}/>
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
