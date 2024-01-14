import { Link } from 'react-router-dom';

const Nav = () =>{

    return(
        <div className="flex top-0 bg-gray-900 text-white h-10 items-center justify-center">
            <Link to ="/about" className="block hover:bg-gray-700 py-2 cursor-pointer">About</Link>
            <Link to="/projects"className="block hover:bg-gray-700 py-2 m-2 cursor-pointer">Projects</Link>
        </div>
    )
}

export default Nav