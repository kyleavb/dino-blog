import React, {Component} from 'react';

class Comment extends Component{
  render(){
    return (
      <div>
        <p key={this.props.index}>{this.props.text}</p>
      </div>
    )
  }
}

export default Comment;
