import React from "react"; 
// import Bootcampers from "./bootcampers";
import Project from "./project";
import { Outlet } from 'react-router-dom';

const projects = [
    {
        id: 0,
        emoji: "💻",
        title: "Tech Blog",
        description: "Application using the model-view-controller model blogging appliction",
        repo:"https://github.com/thechicketarian/Tech-Blog",
        live:" https://thawing-reaches-82099.herokuapp.com/"
    },
    {
        id: 1,
        emoji:"👩🏽‍🎓",
        title: "Bootcampers",
        description: "Interactice Full-Stack Application. Allows you to get/post jobs and resumes",
        repo:"https://github.com/raphson1/groupproject2",
        live: "https://bootcampersut.herokuapp.com/"
    },   {
        id: 2,
        emoji:"🦅",
        title: "Eagle Eye",
        description: "This application pulls data from the National Parks API and Weather API. This allows users to keep an eye on the current weather conditions at each park.",
        repo:"https://github.com/surfinsofia/groupproject1",
        live: "https://surfinsofia.github.io/groupproject1/"
    }
]

function Portfolio(){
    return(
        <div className="container"> 
        <h2> development. </h2>
        <Project projects={projects}/>
        <div>  <Outlet context={projects}/> </div>
        </div>
       
    )
}

export default Portfolio; 