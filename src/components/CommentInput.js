import React from 'react'
import {connect} from 'react-redux'
import {addComment} from '../actions/addComment'


class CommentInput extends React.Component {

    state = {
      content: ''
    }
  
    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value 
        })
    }
  
    handleSubmit = (event) => {
      event.preventDefault()
      
      this.props.addComment(this.state, this.props.attractionId)
  
      
      this.setState({
        content: ''
      })
    }
  
    render() {
      return (
       
          <form className="form" onSubmit={this.handleSubmit}>
            <label>Comment: </label>
            <input type='text' placeholder='enter comment' value={this.state.content} name="content" onChange={this.handleChange}/><br/><br/>
            <input type="submit" value="Submit"/>
          </form>
        
      )
    }
  }
  
  
  export default connect(null, {addComment})(CommentInput)