import React, { Component } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home'
import Blog from './Blog'
import FavoriteFood from './FavoriteFood'
import FavoriteMovie from './FavoriteMovie'
import About from './About'

var quotes = [
"23) If you’re a young Mafia gangster out on your first date, I bet it’s real embarrassing if someone tries to kill you.",
"22) I can picture in my mind a world without war, a world without hate. And I can picture us attacking that world, because they’d never expect it.",
"21) For mad scientists who keep brains in jars, here’s a tip: why not add a slice of lemon to each jar, for freshness?",
"20) If you ever crawl inside an old hollow log and go to sleep, and while you’re in there some guys come and seal up both ends and then put it on a truck and take it to another city, boy, I don’t know what to tell you.",
"19) Children need encouragement. If a kid gets an answer right, tell him it was a lucky guess. That way he develops a good, lucky feeling.",
"18) Can’t the Marx Brothers be arrested and maybe even tortured for all the confusion and problems they’ve caused?",
"17) If they ever come up with a swashbuckling School, I think one of the courses should be Laughing, Then Jumping Off Something.",
"16) To me, it’s always a good idea to always carry two sacks of something when you walk around. That way, if anybody says, “Hey, can you give me a hand?,” you can say, “Sorry, got these sacks.”",
"15) I guess we were all guilty, in a way. We all shot him, we all skinned him, and we all got a complimentary bumper sticker that said, “I helped skin Bob.”",
"14) It’s funny that pirates were always going around searching for treasure, and they never realized that the real treasure was the fond memories they were creating.",
"13) If you’re a horse, and someone gets on you, and falls off, and then gets right back on you, I think you should buck him off right away.",
"12) When I was a kid my favorite relative was Uncle Caveman. After school we’d all go play in his cave, and every once in a while he would eat one of us. It wasn’t until later that I found out that Uncle Caveman was a bear.",
"11) Dad always thought laughter was the best medicine, which I guess is why several of us died of tuberculosis.",
"10) If you’re in a war, instead of throwing a hand grenade at the enemy, throw one of those small pumpkins. Maybe it’ll make everyone think how stupid war is, and while they are thinking, you can throw a real grenade at them.",
"9) I hope if dogs ever take over the world, and they chose a king, they don’t just go by size, because I bet there are some Chihuahuas with some good ideas.",
"8) To me, clowns aren’t funny. In fact, they’re kind of scary. I’ve wondered where this started and I think it goes back to the time I went to the circus, and a clown killed my dad.",
"7) Before you criticize someone, you should walk a mile in their shoes. That way, when you criticize them, you’re a mile away and you have their shoes.",
"6) One thing kids like is to be tricked. For instance, I was going to take my little nephew to Disneyland, but instead I drove him to an old burned-out warehouse. “Oh, no,” I said, “Disneyland burned down.” He cried and cried, but I think that deep down he thought it was a pretty good joke. I started to drive over to the real Disneyland, but it was getting pretty late.",
"5) If God dwells inside us, like some people say, I sure hope He like enchiladas, because that’s what He’s getting!",
"4) It takes a big man to cry, but it takes a bigger man to laugh at that man.",
"3) If you ever fall off the Sears Tower, just go real limp, because maybe you’ll look like a dummy and people will try to catch you because, hey, free dummy.",
"2) If you’re a cowboy and you’re dragging a guy behind your horse, I bet it would really make you mad if you looked back and the guy was reading a magazine.",
"1) If a kid asks where rain comes from, I think a cute thing to tell him is “God is crying.” And if he asks why God is crying, another cute thing to tell him is “Probably because of something you did.”"
]


class App extends Component {
  constructor(props){
    super()
    this.state={

    }
  }

  render(){
    return (
      <Router>
        <div>
          <div className="nav-container">
            <h1 className='Center'>Kyles Site</h1>
            <nav>
              <Link to='/'><button>Home</button></Link>
              <Link to='/Blog'><button>Blog</button></Link>
              <Link to='/FavoriteFood'><button>Food</button></Link>
              <Link to='/FavoriteMovie'><button>Movies</button></Link>
              <Link to='/About'><button>About</button></Link>
            </nav>
            <br />
          </div>
          <Route exact path='/' render={Home} />
          <Route path='/Blog' render={() => <Blog posts={quotes}/>} />
          <Route path='/FavoriteFood' render={FavoriteFood} />
          <Route path='/FavoriteMovie' render={FavoriteMovie} />
          <Route path='/About' render={About} />
        </div>
      </Router>
    );
  }
}

export default App;
