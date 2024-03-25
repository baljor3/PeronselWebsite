import React from "react";

const About = React.forwardRef((props,ref)=>{

    return(<div ref = {ref}id="about" className="text-center pt-10 pb-10 bg-gray-600">
        Bobby Dhillon <br/>
        I am a full stack developer from Vancouver,B.C., Canada.<br></br>
        I am passionate about learning more and gaining new skills.<br></br>
        My projects are listed below.
    </div>)
})

export default About;