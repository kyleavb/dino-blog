import React, { Component } from 'react';
import './App.css';
import Comment from './Comment'
import Author from './Author'

class Post extends Component {
  render() {
    const {post}= this.props

    let allComments = post.comments.map(function(comment, index){
      return <Comment index={index} text={comment} id={index} />
    })

    //let allAuthors = {post.allAuthors}

    return (
      <div className="App">
        <h1>{post.title}</h1>
        <Author />
        <p>By: {post.author}</p>
        <p><strong>{post.body}</strong></p>
        <h2>Comments:</h2>
        <p>{allComments}</p>
      </div>
    );
  }
}

export default Post;
