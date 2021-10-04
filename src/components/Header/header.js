import React from 'react';
import { Link } from 'react-router-dom';
import userImage from '../../images/slika.jpg';
import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <div className="logo">MovieApp</div>
            </Link>
            <div className="user-image">
                <img src={userImage} alt="user"/>
            </div>
        </header>
    );
};

export default Header;