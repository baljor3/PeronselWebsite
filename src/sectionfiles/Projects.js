import little from "../images/littlelemon.png"
import "../css/project.css"
import { useRef } from "react";
import React from "react";

const Projects = React.forwardRef((props,ref) =>{
    return(
        <div ref={ref} className="grid grid-cols-2 gap-2 items-center 
         justify-center">
            <div id="projects"className="col-span-2 text-center text-2xl font-bold m-3">Projects</div>
            <div className="flex items-center justify-center">
                <a href ="https://frontend-littlelemon.vercel.app/">
                    <div className="image-container relative group">

                    <img alt = "little"
                    src={little}
                    width="450px"
                    height="450px"
                    className="border
                    rounded
                    border-double
                    border-gray
                    shadow-md
                    p-2" >
                    </img>
                    </div>
                </a>
            </div>
        <div>
            Little Lemon website <br></br><br></br>
            This is a resturant that allows users to book reservations,
            add/delete items to cart, add reviews, register, and login.<br>
            </br><br></br>
            FrontEnd:<br></br>
            <i>React</i><br></br>
            <i>HTML</i><br></br>
            <i>CSS</i><br></br>
            <br></br>
            BackEnd:<br></br>
            <i>Postgres</i><br></br>
            <i>Nodejs</i>
        </div>
        </div>
    )
})

export default Projects