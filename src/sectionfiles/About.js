import { useRef } from "react";

const About = ()=>{
    const aboutRef = useRef();

    return(<section ref = {aboutRef} id="about" className="text-center pt-10 pb-10 bg-gray-600">
        Baljor Dhillon <br/>
        I am a full stack developer from Vancouver,B.C., Canada.<br></br>
        I am passionate about learning more and gaining new skills.<br></br>
        My projects are listed below.
    </section>)
}

export default About;