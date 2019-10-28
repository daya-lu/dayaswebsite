import React, { Component } from 'react';

class About extends Component {
  render() {
    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
    }

    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" src={profilepic} alt="Daya Lu profile pic" />
            </div>
            <div className="nine columns main-col">
               <p>Hello there, thanks for visiting! I'm Daya and I'm currently a senior at Johns Hopkins University 
                  studying computer science, with minors in entrepreneurship & management and applied math & statistics. 
                  I'm passionate about combining art and technology through graphic design and front-end development. 
                  I also love reading, traveling, improving my Chinese, listening to music (check out my 
                  <a href="https://music.apple.com/us/playlist/current-faves/pl.u-LRW5FkP2zGM"> current favorite songs</a>!), 
                  and participating in community service around Baltimore. This semester, I'm studying abroad in 
                  Shanghai at Fudan University, where I'm taking classes about Chinese culture and doing an internship 
                  program at a local web development company.</p>
            </div>
         </div>
      </section>
    );
  }
}

export default About;
