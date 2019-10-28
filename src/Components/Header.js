import React, { Component } from 'react';
import '../App.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.bounce = this.bounce.bind(this);
  }

  componentDidMount() {
    this.bounce();
  }

  bounce() {
    Array.from(document.getElementsByClassName('letter')).forEach(letter => {
      letter.addEventListener("mouseover", (e) => {
          letter.classList.add("hovered")
      })
      letter.addEventListener("animationend", (e) => {
          letter.classList.remove("hovered")
      })
    })
  }


  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div id="name">
            <span class="logo">
            <span id="d" class="letter">D</span>
            <span id="a1" class="letter">A</span>
            <span id="y" class="letter">Y</span>
            <span id="a2" class="letter">A</span>
            </span>
            <span class="logo">
            <span id="l" class="letter">L</span>
            <span id="u" class="letter">U</span>
            </span>
         </div>

         <div id="intro">
            <br></br>
            <div class="typewriter"><p>Aspiring software engineer.</p></div>
            <p>Currently in <strike>Gaithersburg</strike></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strike>Baltimore</strike></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strike>Seattle</strike></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shanghai</p>

         </div>

         <br></br>
         <ul className="social">
            {networks}
         </ul>
      </div>


      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
