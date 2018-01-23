import React, { Component } from 'react'
import Post from './_post.js.jsx'
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'

  }
};
class AllPosts extends Component {
  constructor() {
      super();
      this.state = {
        modalIsOpen: false,
        activePostId: null,
        activePostBody: '',
        activePostTitle: ''
      };

      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
  }

  openModal(post) {
    this.setState({
      modalIsOpen: true,
      activePostId: post.id,
      activePostBody: post.body,
      activePostTitle: post.title

    });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

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
      let postLength = post.body.length > 80 ? <div onClick={() => this.openModal(post)}>Read More</div>:  <div></div>;

      return (

        <div className="posts" key={post.id}>

          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            ariaHideApp={false}
          >
            <h1>{this.state.activePostTitle}</h1>
            <div id="modal-content">{this.state.activePostBody}</div>
            <button className="btn btn-default btn-block" id="close-button" onClick={this.closeModal}>close</button>

        </Modal>


        <Post post={post}
          handleDelete={this.handleDelete.bind(this, post.id)}
          handleUpdate={this.onUpdate.bind(this)}handleFactorial={this.updateFactorial.bind(this)}/>
               <p>by:</p>
             {post.author}
             {postLength}
        </div>

      )
    })
    return (

        <div className="post-container">
            {posts}
        </div>
     )
  }
}

export default AllPosts;
