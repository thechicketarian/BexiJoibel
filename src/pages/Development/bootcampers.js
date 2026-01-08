import React from "react";
import '../../pages/Development/dev.css'
import { useOutletContext } from 'react-router-dom';

function Bootcampers() {

    const data = useOutletContext();
    console.log(data, "raw data")
    
    
    return(
        <div className="main"> 
        <h2> this is a test</h2>
        <div> teati </div>
                
        </div>
    );
}


export default Bootcampers;