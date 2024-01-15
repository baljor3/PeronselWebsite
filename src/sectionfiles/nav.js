import { Link } from 'react-router-dom';

const Nav = () =>{

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <div className="flex top-0 bg-gray-900 text-white h-10 items-center justify-center">
            <i onClick={() => scrollToSection('aboutRef')} className="block hover:bg-gray-700 py-2 cursor-pointer">About</i>
            <i onClick={() => scrollToSection('portfolioRef')}className="block hover:bg-gray-700 py-2 m-2 cursor-pointer">Projects</i>
        </div>
    )
}

export default Nav