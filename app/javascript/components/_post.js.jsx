import React, { Component } from 'react';

class Post extends Component {
  constructor() {
    super()
    this.state = {
      editable: false
    }
  }
  handleEdit() {
    let randomNumber = Math.floor(Math.random() * 10) + 1
    let factorial = this.props.handleFactorial(randomNumber)
    console.log(factorial)
    if(this.state.editable) {
      let title = this.refs.title.value;
      let id = this.props.post.id;
      let body = this.refs.body.value;
      let post = {id: id , title: title , body: body, factorial: factorial}
      this.props.handleUpdate(post)
    }
      this.setState({editable: !this.state.editable})
    }
  render() {
    let title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.post.title} /> : <h3>{this.props.post.title}</h3>;
    let body = this.state.editable ? <input type='text' ref='body' defaultValue={this.props.post.body} />: <p>{this.props.post.body}</p>;
    return (
      <div>
        {title}
        {body}
        <button onClick={this.props.handleDelete} >Delete</button>
        <button onClick={this.handleEdit.bind(this)}> {this.state.editable ? 'Submit' : 'Edit' } </button>
      </div>
    )
  }
}
export default Post;
