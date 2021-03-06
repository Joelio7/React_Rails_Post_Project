import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import $ from "jquery";

class NewPost extends Component {
  handleClick() {
    // We passed the factorial method through props from parent component
    // Will call, get value, set to variable and that variable will be used
    // to set the property on submit
    let randomNumber = Math.floor(Math.random() * 10) + 1
    let factorial = this.props.factorialCalculator(randomNumber)
    let title = this.refs.title.value;
    let author = this.refs.author.value;
    let body = this.refs.postBody.value;
    $.ajax({
        url: '/api/v1/posts',
        type: 'POST',
        data: { post: { title: title, body: body, factorial: factorial, author: author } },
        success: (post) => {
          this.props.handleSubmit(post);
        }
    });
  }
  render() {
    return (
      <div id="form-begin"className="form-section">
        <h1 > Post a story </h1>
        <h4> Write something that wins </h4>
        <div className='form-container'>
          <div className="form-group">
            <label  className="form-label" for="author">Your Name</label>
            <input minLength="5" maxLength="30" className="form-input" ref='author' required/>
            <label className="form-label" for="title">Post Title</label>
            <input minLength="5" maxLength="50" className="form-input" ref='title'required/>
            <label className="form-label" for="body">Post Body</label>
            <textarea minLength="50" className="form-input" id='body-text' ref='postBody'required />
            <button className="btn btn-default success-button" onClick={this.handleClick.bind(this)}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default NewPost;
