import React from "react"; 
import {Link } from "react-router-dom"
import '../../pages/Home/home.css'
import backgroundVideoHomePg from '../../images/header.mp4';
import designImg from '../../images/vidthumb.jpg'
import devImg from '../../images/gymRats.jpg'
import artImg from '../../images/artImg.jpg'
import videoGif from '../../images/videoMobile.gif'

function Home(){
    return(
        <main> 
        <div className="homecontainer" > 
        <p> bexijoibel.com </p>
        <hr></hr>
        <p className="splinterQuote"> <span> "We choose what holds us back and moves us forward" - master splinter </span> </p>
        <video className="homepageVideo" autoPlay muted loop playsInline> <source src={backgroundVideoHomePg} type="video/mp4"/> </video>
        </div>
        <img className="homepageVideoGif" src={videoGif} alt="Custom Drawing"></img>

        <h1 className="homeH1"> artist. designer. developer.  </h1>
        <div className="hp-menu"> 
        <Link to ="about"> about me </Link> 
        <hr></hr>
        {/* <Link to ="https://www.linkedin.com/in/bexi-joibel/" target="_blank"> LinkedIn </Link> */}
        <a href="https://www.linkedin.com/in/bexi-joibel/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {/* <hr></hr> */}
        {/* <Link to="https://github.com/thechicketarian" target="_blank"> GitHub </Link>  */}
        </div>
        
        <div className="boxes"> 

        <div> <h2> Specialties </h2> <span> Proudly designing since 2016, coding fluently since 2022, and happily creating since 94.</span> – Bexi Joibel C. </div>

        <div>
        <span className="spanImgTitle"> Idle Hands // 2012 </span>
        <img className="artImg" src={artImg} alt="Custom Drawing"></img>
            {/* <p> <Link to="design"> my first love & my roots ---  visit the ARTchive </Link> </p> */}
            <p> fine arts: my first love & roots </p>
            </div>


            <div className="designPic"> 
            <span className="spanImgTitle"> 1970s Abecedarium // 2016 </span> 
            <img className="designImg" src={designImg} alt="Abecedarium Book Design Cover"></img>
            <p>  design: my foundation  </p> 
            </div>


            <div>    
            <span className="spanImgTitle">  Gym Ratz // 2022  </span>
                <img className="devImg" src={devImg} alt="fitness static poster"></img>
            <p> development: my new discipline </p>
            </div>
        </div>
        </main>
        
    )
}

export default Home; 