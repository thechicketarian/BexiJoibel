import React from "react";
import {Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import logo from '../images/bxflo_acro_logo.jpg'
// import ResumeFile from "../images/BexiResume.pdf";

function Header() {

    //hides header on the homepage
    const { pathname } = useLocation();
    console.log(pathname);
    if (pathname === "/" ) return null;

  return (
    <nav className="nav">
      <div className="innerNav">

        <div className="navLinks">
          <div className="logo"> <Link to ="/">   <img src={logo} alt="bexi"/></Link> </div>
          <Link to ="about"> About</Link>
           <Link to ="projects">Projects</Link>
          {/* <a className = "resumeDownload" href={ResumeFile}  target="_blank" rel="noopener noreferrer">Resume</a> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
