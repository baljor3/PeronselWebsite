import About from "./About"
import Projects from "./Projects"
import { useRef } from "react";

const HomePage = () =>{
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);


    

    return(
        <div>
            < About ref = {aboutRef}/>
            <Projects ref = {portfolioRef}/>
        </div>
    )
}

export default HomePage