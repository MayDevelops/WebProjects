import React, {Component, useState} from 'react';
import './Header.css';

import Logo from '../images/logo.png';
import Globe from '../images/globe.png';
import Love from '../images/love.png';

import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Header extends Component {
    render() {
        function toBrowse() {
            window.location = '/browse';
        }

        function toHome() {
            window.location = '/';
        }

        function toCart() {
            window.location = '/cart';
        }

        return (
            <div id="app">
                <div id="menu">
                    <div id="brand">
                        <Link to="#" onClick={toHome}>
                            <img src={Logo} alt=''/>
                        </Link>
                    </div>
                    <div id="side">
                        <div className="menu-item browse">
                            <Link to="#" onClick={toBrowse}>
                                <img src={Globe} alt=''/>
                                <p>Browse</p>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="#" onClick={toCart}>
                                <img src={Love} alt=''/>
                                <p>{this.props.cart.length} items</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

}

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
}

export default connect(mapStateToProps, null)(Header);