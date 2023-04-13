import "./Navbar.css";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import logoImg from "../../images/logo.png";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleNavbar = () => setToggleMenu(!toggleMenu);
    const currentUser = useSelector((state) => state.user);

return(
    <nav className='navbar' id='navbar'>
        <div className='container navbar-content flex'>
            <div className='brand-and-toggler flex flex-sb'>
                <Link to='/' className=''>
                </Link>
            </div>

        </div>
    </nav>
)
}

export default Navbar