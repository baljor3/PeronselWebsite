import About from "./About"
import Projects from "./Projects"
import { useRef } from "react";
import Nav from "./nav"

const HomePage = () =>{
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);
    const refs={
        ref1: aboutRef,
        ref2: portfolioRef
    };

    return(
        <div>
            <Nav ref = {refs} />
            < About ref={aboutRef} />
            <Projects ref ={portfolioRef}/>
        </div>
    )
}

export default HomePage