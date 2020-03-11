import React from 'react'
import {connect} from 'react-redux'
import {addComment} from '../actions/addComment'


class CommentInput extends React.Component {

    state = {
      content: ''
    }
  
  
    handleSubmit = (event) => {
      event.preventDefault()
      this.props.addComment(this.state)
      this.setState({
        content: ''
      })
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Comment: </label>
            <input type='text' placeholder='enter comment' value={this.state.comment} name="name" onChange={this.handleChange}/><br/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      )
    }
  }
  
  
  export default connect(null, {addComment})(CommentInput)