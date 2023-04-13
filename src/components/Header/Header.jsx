import "./Header.css";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import React from "react";

const Header = () => {
    return (
        <header className='header'>
            <Navbar/>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find what you need there~</h2><br/><br/>
                <p className='header-text fs-18 fw-3'>There might some text but i i'm t lazy for it~</p>
                <SearchForm/>
            </div>
        </header>
    )
}

export default Header