import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href='/shop'>Shop</a>
                <a href='/review'>Order Review</a>
                <a href='/manage'>Inventory</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
            </nav>
        </div>
    );
};

export default Header;