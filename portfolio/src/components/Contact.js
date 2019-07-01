import React, { Component } from "react";
import Resume from '../images/Nicholas Parr Resume.pdf'

class Footer extends Component
{

  render()
  {
    return (
      <>
        <h2>Contact</h2>
        <div className="row justify-content-center">

          <a className="contacts col-5 col-xl-2" href="mailto:parrnicholasj@gmail.com">parrnicholasj@gmail.com</a>

          <a className="contacts col-5 col-xl-2" href="https://www.linkedin.com/in/nicholas-parr-854b61b7/">linkedin</a>

          <a className="contacts col-5 col-xl-2" href="https://github.com/parrnicholasj">Github</a>

          <a className="contacts col-5 col-xl-2" href={Resume}>Resume</a>

        </div>
      </>
    );
  }
}

export default Footer;
