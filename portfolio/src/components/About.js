import React, { Component } from "react";
import profilePic from '../images/profilePic.jpg';

class About extends Component
{

  render()
  {
    return (
      <>
        <div className="row">
          <div className="col-12">
            <h2>About Me</h2>
          </div>
          <div className="col-10">
            <div className="row">

              <div className="col-12 col-md-4">
                <img className="profile" src={profilePic} alt="Picture of Nicholas Parr"
                  className="img-responsive" />
              </div>
              <div className="col-12 col-md-8  text-center">
                <p>Recent Interactive multimedia major graduate with minors in history and classics from the College of New
                  Jersey. Skilled in the fields of web and game design with experience in C#, Unity engine, JavaScript, PHP,
                  MySQL, CSS, and AngularJS. Motivated self-starter seeking employment opportunities in programming and/or
              multimedia.</p>

                <p>Recently I started in a coding bootcamp where I hope to further my skills in web development. I am always
                  looking to further enhance my skills and learn new and interesting things. I look forward to a long and
                  exciting career in the software devlopment industry and the opportunity to experience and devlop for the
                  new
              technologies of tomorrow.</p>
              </div>

            </div>
          </div>

        </div>
      </>
    );
  }
}

export default About;
