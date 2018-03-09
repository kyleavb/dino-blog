import React from 'react';

const About = () => {
  return(
    <div>
      <h1>About Works</h1>
      <hr />
      <img src={process.env.PUBLIC_URL + '/Rounded.png'} alt="Dudes"/>
      <h3>I am a dude, I enjoys computers, comedy comes in threes</h3>
    </div>
  )
}
export default About
