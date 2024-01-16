
import React from 'react';


const Nav = React.forwardRef((props, ref) =>{
    const scrolltosection = (elementRef) =>{
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior:"smooth"
        })
    }

    const {ref1,ref2} = ref

    return(
        <div className="fixed top-0 flex  bg-gray-900 text-white h-10 items-center justify-center w-full">
            <i onClick={() =>{scrolltosection(ref1)}} className="block hover:bg-gray-700 py-2 cursor-pointer">About</i>
            <i onClick={() => scrolltosection(ref2)}className="block hover:bg-gray-700 py-2 m-2 cursor-pointer">Projects</i>
        </div>
    )
})

export default Nav