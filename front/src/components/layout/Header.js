import React from "react";
import {Link} from "react-router-dom";
import Logo from "../widget/Logo";

const Header = ()=>{
    return (
        <header>
            <Logo/>
            <nav className="nav--Header">
                <li>
                    <Link to="/" className="">Top</Link>
                </li>
                <li>
                    <Link to="/blog" className="">Blog</Link>
                </li>
                <li>
                    <Link to="/english" className="">English</Link>
                </li>
                <li>
                    <Link to="/contact" className="">Contact</Link>
                </li>
            </nav>
        </header>
    )
}

export default Header;