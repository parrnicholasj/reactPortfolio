import React, { Component } from "react";

class NavBar extends Component
{

  render()
  {
    return (
      <>
        <div className="row">
          <div className="col-12 col-lg-4 darker">
            <h1>Nicholas Parr</h1>
          </div>
          <div className="col-12 col-lg-8 m-0">

            <nav className="navbar navbar-expand-lg dark">

              <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link active" href="#">About <span className="sr-only">(current)</span></a>
                  <a className="nav-item nav-link" href="#">Contact</a>
                  <a className="nav-item nav-link" href="#">Portfolio</a>

                </div>
              </div>
            </nav>
          </div>

        </div>
      </>
    );
  }
}

export default NavBar;

