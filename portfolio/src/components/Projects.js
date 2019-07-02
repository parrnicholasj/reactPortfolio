import React, { Component } from "react";

class Projects extends Component
{

  render()
  {
    return (
      <>

        <h2 className="col-10 col-lg-6">Projects</h2>

        <div className="container">

          <div className="card flex-row flex-wrap">
            <div className="card-header border-0">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/1024px-Overwatch_circle_logo.svg.png" alt="Overwatch logo" />
            </div>
            <div className="card-block px-2">
              <h4 className="card-title">Overworkshop</h4>
              <p className="card-text">Overworkshop is an application that allows users to share find and review game modes for the Workshop of the Game Overwatch.  Users can log into google to share their own game modes as well as comment on and review other people’s game modes.  All information is stored on a MySQL server and powered by NodeJS and React.  I was personally responsible for creating the backend for the comments and posts as well as overseeing the creation and implementation of the frontend while working with my group.</p>
              <a href="https://github.com/parrnicholasj/overworkshop2" className="btn btn-primary m-1">Github</a>
              <a href="https://overworkshop.herokuapp.com/" className="btn btn-primary m-1">Live</a>
            </div>
            <div className="w-100"></div>

          </div>

          <div className="card flex-row flex-wrap">
            <div className="card-header border-0">
              <img src="https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015_960_720.jpg" alt="Globe of Earth" />
            </div>
            <div className="card-block px-2">
              <h4 className="card-title">Research It: Country Edition</h4>
              <p className="card-text">Research It: Country Edition is designed as a classroom research tool for grades 5-7. Students at this age often start engaging in research projects for the first time, and begin talking about primary and secondary sources for research. The app is meant to be used as a preliminary research tool, to guide students through what kinds of information they might need in a larger research project.  In this group project I was personally responsible for the implementation of all the APIs used in the project.</p>
              <a href="https://github.com/parrnicholasj/Research-it-World-Edition" className="btn btn-primary m-1">Github</a>
              <a href="https://parrnicholasj.github.io/Research-it-World-Edition/" className="btn btn-primary m-1">Live</a>
            </div>
            <div className="w-100"></div>

          </div>

          <div className="card flex-row flex-wrap">
            <div className="card-header border-0">
              <img src="https://ipa.org.au/wp-content/uploads/2018/07/Forum.jpg" alt="Roman ruins" />
            </div>
            <div className="card-block px-2">
              <h4 className="card-title">History Trivia Game</h4>
              <p className="card-text">This was a simple game I created to practice using timers in JavaScript.  It has the user answer a series of questions related to history within a set amount of time and tracks their score.</p>
              <a href="https://github.com/parrnicholasj/triviaGame" className="btn btn-primary m-1">Github</a>
              <a href="https://parrnicholasj.github.io/triviaGame/" className="btn btn-primary m-1">Live</a>
            </div>
            <div className="w-100"></div>

          </div>

        </div>

      </>
    );
  }
}

export default Projects;
