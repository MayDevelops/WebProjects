import React, {Component} from 'react';
import './Browse.css';
import ProductGrid from "./ProductGrid";
import {connect, useDispatch} from "react-redux";
import {sendFilterCountry} from "../data/actions";
import PropTypes from "prop-types";

class Browse extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="pure-menu pure-menu-horizontal">
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><a className="pure-menu-link"
                                                              onClick={event => this.props.setCountryFilter(event)}>United
                                States</a></li>
                            <li className="pure-menu-item"><a className="pure-menu-link"
                                                              onClick={event => this.props.setCountryFilter(event)}>Canada</a>
                            </li>
                            <li className="pure-menu-item"><a className="pure-menu-link"
                                                              onClick={event => this.props.setCountryFilter(event)}>Brazil</a>
                            </li>
                            <li className="pure-menu-item"><a className="pure-menu-link"
                                                              onClick={event => this.props.setCountryFilter(event)}>Mexico</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <ProductGrid/>
            </div>
        );
    }
};

Browse.propTypes = {
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash,

})

const mapDispatchToProps = dispatch => {
    return {
        setCountryFilter: (filter) => dispatch({
            type: "FILTER_COUNTRY",
            payload: filter.target.innerText.toString().toLowerCase()
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);