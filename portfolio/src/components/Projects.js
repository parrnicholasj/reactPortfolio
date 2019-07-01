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
              <img src="//placehold.it/200" alt="" />
            </div>
            <div className="card-block px-2">
              <h4 className="card-title">Overworkshop</h4>
              <p className="card-text">Description</p>
              <a href="#" className="btn btn-primary">BUTTON</a>
            </div>
            <div className="w-100"></div>
            
          </div>

          <div className="card flex-row flex-wrap">
            <div className="card-header border-0">
              <img src="//placehold.it/200" alt="" />
            </div>
            <div className="card-block px-2">
              <h4 className="card-title">Overworkshop</h4>
              <p className="card-text">Description</p>
              <a href="#" className="btn btn-primary">BUTTON</a>
            </div>
            <div className="w-100"></div>
            
          </div>

        </div>

      </>
    );
  }
}

export default Projects;
