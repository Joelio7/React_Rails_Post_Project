import React, { Component } from 'react';
import Truncate from 'react-truncate'

class Post extends Component {
  constructor() {
    super()
    this.state = {
      editable: false
    }
  }
  handleEdit() {
    if(this.state.editable) {
      let title = this.refs.title.value;
      let id = this.props.post.id;
      let body = this.refs.body.value;
      let post = {id: id , title: title , body: body}
      this.props.handleUpdate(post)
    }
      this.setState({editable: !this.state.editable})
    }
  render() {
    let title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.post.title} /> : <h3>{this.props.post.title}</h3>;
    let body = this.state.editable ? <input type='text' ref='body' defaultValue={this.props.post.body} />: <p>{this.props.post.body}</p>;
    let truncate = this.state.editable ? <div>{body}</div>:  <div><Truncate lines={3} > {body}</Truncate></div>;
    return (
      <div>
        {title}
        {truncate}
        <div className="buttons">
          <button className="btn btn-error"onClick={this.props.handleDelete} >Delete</button>
          <button className="btn btn-primary delete" onClick={this.handleEdit.bind(this)}> {this.state.editable ? 'Submit' : 'Edit' } </button>
        </div>
      </div>
    )
  }
}
export default Post;
