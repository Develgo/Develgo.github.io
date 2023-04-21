import { Link } from "react-router-dom";
import homeLogo from '../logo.svg';


const NavBar = () => {
    return (
        <nav className="flex items-center justify-between bg-develgo-blue">
            <Link className="cursor-pointer" to="/">
                <img src={homeLogo} alt="Develgo Logo" className="nav-logo bg-develgo-light-blue" />
            </Link>
            <div className="mx-4 space-x-4 text-lg text-white font-bold">
                <Link className="cursor-pointer hover:underline" to="/about">About</Link>
                <Link className="cursor-pointer hover:underline" to="/careers">Careers</Link>
            </div>
        </nav>
    );
};

export default NavBar;