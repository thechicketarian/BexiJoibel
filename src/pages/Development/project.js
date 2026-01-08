import React from "react";
import '../../pages/Development/dev.css'


function Project(props) {

        console.log(props);
    console.log(props.projects[0].emoji, "this is techblog")

    return(
        <div className="allCards">
            {props.projects.map(project =>(
                <div className="projectCard"  key={project.id}> 
                {/* <div className="projectEmoji"> <span role="img" aria-label="computer"> {project.emoji}</span> </div> */}
                <h3 > {project.title}</h3> 
                <p> {project.description} </p>
                <hr className="hr"></hr>
                <p className="pLinks"> <a href={project.repo} target="_blank" rel="noopener noreferrer"> Repo </a> <a href={project.live} target="_blank" rel="noopener noreferrer"> demo + </a></p>
                </div>
          
))}
    
        </div>
    
                

    );
}

export default Project;