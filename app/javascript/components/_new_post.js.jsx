import React, { Component } from 'react';
import $ from "jquery";

class NewPost extends Component {
  handleClick() {
    let randomNumber = Math.floor(Math.random() * 10) + 1
    let factorial = this.props.factorialCalculator(randomNumber)
    let title = this.refs.title.value;
    let body = this.refs.postBody.value;
    $.ajax({
        url: '/api/v1/posts',
        type: 'POST',
        data: { post: { title: title, body: body, factorial: factorial } },
        success: (post) => {
          this.props.handleSubmit(post);
        }
    });
  }
  render() {
    return (
      <div className="form-group">
        <input className="form-input" ref='title' placeholder='Enter the title for the post' />
        <textarea className="form-input" ref='postBody' placeholder='Body Text' />
        <button className="btn btn-success" onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default NewPost;