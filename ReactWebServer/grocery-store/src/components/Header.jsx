import React, {Component} from 'react';
import './Header.css';

import Logo from '../images/logo.png';
import Globe from '../images/globe.png';
import Love from '../images/love.png';

import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Header extends Component {
    render() {
        const cart = this.props.cart;
        return (
            <div id="app">
                <div id="menu">
                    <div id="brand">
                        <Link to="/">
                            <img src={Logo} alt='' onClick={this.props.reset}/>
                        </Link>
                    </div>
                    <div id="side">
                        <div className="menu-item browse">
                            <Link to="/browse">
                                <img src={Globe} alt='' onClick={() => {
                                    this.props.push(cart)
                                }}/>
                                <p>Browse</p>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/cart">
                                <img src={Love} alt='' onClick={() => {
                                    this.props.push(cart)
                                }}/>
                                <p>{this.props.data.cart.length} items</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );

    };
}

Header.propTypes = {
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash,

    data: state.data
})

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => dispatch({type: "RESET"}),
        push: (cart) => dispatch({type: "PUSH", payload: cart})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);