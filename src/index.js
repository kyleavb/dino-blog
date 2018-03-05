import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
  title: "Dinosaurs are awesome",
  author: "Stealthy Stegosaurus",
  body: "Check out this body property!",
  comments: ["First!", "Great post", "Hire this author now!", "NEW SHIT!"]
}

var authors = ["test"]

ReactDOM.render(<Post post={post} allAuthors={authors} />, document.getElementById('root'));
registerServiceWorker();
