import React, { Component } from "react";

class Footer extends Component
{

  render()
  {
    return (
      <>
        <h2>Contact</h2>
        <div className="row justify-content-center">

          <div className="contacts col-5 col-xl-2">
            <a href="mailto:parrnicholasj@gmail.com">parrnicholasj@gmail.com</a>
          </div>

          <div className="contacts col-5 col-xl-2">
            <a href="https://www.linkedin.com/in/nicholas-parr-854b61b7/">linkedin</a>
          </div>

          <div className="contacts col-5 col-xl-2">
            <a href="https://github.com/parrnicholasj">Github</a>
          </div>

          <div className="contacts col-5 col-xl-2">
            <a href="assets/images/Nicholas Parr Resume.pdf">Resume</a>
          </div>

        </div>
      </>
    );
  }
}

export default Footer;
