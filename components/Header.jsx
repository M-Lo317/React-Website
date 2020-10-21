import React from 'react';
import Navbar from './Navbar.jsx';
//import logo from '../backup.public/images/logo.jpg';     <img src= {logo} alt=""/>

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <img className="logo" src="/images/logo.png" alt="M-Lo Art" />
            </div>
            <Navbar />
        </header>
    );
};

export default Header;