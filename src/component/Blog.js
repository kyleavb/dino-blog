import React, {Component} from 'react';
import Post from './Post'

class Blog extends Component{
  handleClick(){
    console.log("Clicked")
  }
  render(){
    let allPosts = this.props.posts.map((post, index)=>{
      return <Post key={index} text={post} />
    })
    return(
      <div>
        <h1>Deep Thoughts</h1>
        <hr />
        {allPosts}
      </div>
    )
  }
}
export default Blog
