import React, { Component } from "react";
import profilePic from '../images/portfolioPic.jpg';

class About extends Component
{

  render()
  {
    return (
      <>
        <div className="row">

          <h2 className="col-10 col-lg-6">About Me</h2>

          <div className="col-10">
            <div className="row justify-content-center">

              <div className="col-5 col-md-4 m-2">
                
                <img className="fixImage " src={profilePic} alt="Nicholas Parr" />

              </div>

              <div className="col-10 col-md-6 m-2">
                <p>Welcome to my portfolio where you can learn a bit about me and what I do as a programmer and fullstack devloper.  With my degree in Interactive Multimedia and knowledge gained from a web development boot camp I am a capable and adaptive full stack developer.  In college I was the president of our game design club where I shared my passion for developing with my peers by doing things such as leading tutorials and organizing game jams.  I have recently cultivated my skills with javascript and general web development skills by learning to work with tools such as Git, Jquery, Bootstrap, and React as well as grappling with a number of different APIs.  Feel free to contact me by email or linkedin.</p>

              </div>

            </div>
          </div>

        </div>
      </>
    );
  }
}

export default About;
