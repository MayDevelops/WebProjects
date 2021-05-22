import React from 'react';
import './Footer.css';
import GitHubLogo from '../images/GitHub-Mark-64px.png';

const Footer = () => {
    return (
        <div className="github">
            <div className="center">
                <a href="https://github.com/MayDevelops/WebProjects/tree/master/ReactWebServer/Homepage">
                <img src={GitHubLogo} alt=""/>

                </a>
            </div>
        </div>
    );
};

export default Footer;
