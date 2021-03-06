import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import AllPosts from './_all_posts.js.jsx'
import NewPost from './_new_post.js.jsx'
import $ from "jquery"

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    $.getJSON('/api/v1/posts.json', (response) => { this.setState({ posts: response }) });
  }
  handleSubmit(post) {
    let newState = this.state.posts.concat(post);
    this.setState({ posts: newState })
  }
  handleScrollToElement() {
    const element = document.getElementById('form-begin')
    const tesNode = ReactDOM.findDOMNode(element)
    window.scrollTo(0, tesNode.offsetTop);
}
  factorialCalculator(randomNumber) {
    let result = randomNumber;
    if (randomNumber === 0 || randomNumber === 1)
      return 1;
    while (randomNumber > 1) {
      randomNumber--;
      result *= randomNumber;
    }
    return result;
  }

  handleDelete(id) {
    $.ajax({
        url: `/api/v1/posts/${id}`,
        type: 'DELETE',
        success:() => {
             this.removeItemClient(id);
          }
      })
  }
  handleUpdate(post) {
    // For updates we set the factorial logic directly in the body component
    // Since that is where the handle update is happening.
    let randomNumber = Math.floor(Math.random() * 10) + 1
    let factorial = this.factorialCalculator(randomNumber)
    post.factorial = factorial
    $.ajax({
      url: `/api/v1/posts/${post.id}`,
      type: 'PUT',
      data: { post: post },
      success: () => {
        this.updatePosts(post)
      }
    }
  )}
  updatePosts(post) {
    let posts = this.state.posts.filter((i) => { return i.id != post.id })
    posts.push(post)
    this.setState({posts: posts });
  }
  removeItemClient(id) {
    let newPosts = this.state.posts.filter((post) => {
      return post.id != id;
    });
      this.setState({ posts: newPosts });
    }
  render() {
    return (
       <div>
        <AllPosts posts={this.state.posts} handleDelete={this.handleDelete.bind(this)} onUpdate={this.handleUpdate.bind(this) } factorialCalculator={this.factorialCalculator.bind(this)}/>
        <NewPost handleSubmit={this.handleSubmit.bind(this)} factorialCalculator={this.factorialCalculator.bind(this)}  />
          <button id="fixed-button" onClick={this.handleScrollToElement} className="btn btn-primary btn-block">Add a post</button>
      </div>
    )
  }
}
export default Body;
