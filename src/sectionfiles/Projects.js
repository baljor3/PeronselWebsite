import little from "../images/littlelemon.png"
import splat from "../images/splat.png"
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
            <i>Express</i><br></br>
            <i>Nodejs</i>
        </div>
        <div className="flex items-center justify-center">
            <a href="https://splat-bfmx.onrender.com/">
                <div className="image-container relative group">
                    <img alt = "splat"
                    src = {splat}
                    width="450px"
                    height="450px"
                    className="border
                    rounded
                    border-double
                    border-gray
                    shadow-md
                    p-2"
                    >
                    </img>
                </div>
            </a>
        </div>
        <div>
            Splat website <br></br><br></br>
            Splat is an online message board/game platform that allows players to join private or public internet communities called canvases.Target audience is anyone 
            who is interested in a more personal messaging board experience. The one main feature of the project is the message board and “canvases”. 
            Canvases will work like private forums with different topics or chat rooms with posts on the form being called Splats. 
            With games such as chess, checkers with scoreboards being integrated with your username. Users must enter a password in order to join private forums<br>
            </br><br></br>
            FrontEnd:<br></br>
            <i>EJS</i> <br></br>
            <i>HTML</i><br></br>
            <i>CSS</i><br></br>
            <br></br>
            BackEnd:<br></br>
            <i>Postgres</i><br></br>
            <i>Express</i><br></br>
            <i>Nodejs</i>
        </div>
    </div>
    )
})

export default Projects