import React, { Component } from 'react';
import $ from "jquery";

class NewPost extends Component {
  handleClick() {
    var title = this.refs.title.value;
    var body = this.refs.postBody.value;
    $.ajax({
      url: '/api/v1/posts',
      type: 'POST',
      data: { post: { title: title, body: body } },
      success: (post) => {
        this.props.handleSubmit(post);
      }
    });
  }
  render() {
    return (
      <div>
        <input ref='title' placeholder='Enter the title for the post' />
        <input ref='postBody' placeholder='Body Text' />
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default NewPost;
