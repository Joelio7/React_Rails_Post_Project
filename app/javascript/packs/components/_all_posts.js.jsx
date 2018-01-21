import React, { Component } from 'react'
import Post from './_post.js.jsx'

class AllPosts extends Component {

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  onUpdate(post) {
    this.props.onUpdate(post);
  }

  updateFactorial(randomNumber) {
    this.props.factorialCalculator(randomNumber)
  }

  render() {
    const posts = this.props.posts.map((post) => {
      return (
        <div key={post.id}>
          <Post post={post}
           handleDelete={this.handleDelete.bind(this, post.id)}
           handleUpdate={this.onUpdate.bind(this)}handleFactorial={this.updateFactorial.bind(this)}/>
        </div>
      )
    })
    return(
     <div>
        {posts}
     </div>
     )
  }
}

export default AllPosts;
