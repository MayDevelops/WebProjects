import React from 'react';
import Browse from './Browse'
import './Header.css';
import Logo from '../images/logo.png';
import Globe from '../images/globe.png';
import Love from '../images/love.png';

import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="app">
            <div id="menu">
                <Router>
                    <div id="brand">
                        <Link to="/">
                        <img src={Logo} alt=''/>
                        </Link>
                    </div>
                    <div id="side">
                        <div className="menu-item browse">
                            <Link to="/">
                            <img src={Globe} alt=''/>
                            <p>Browse</p>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/">
                            <img src={Love} alt=''/>
                            <p>0 items</p>
                            </Link>
                        </div>
                    </div>
                </Router>
            </div>
        </div>
    );
};

export default Header;