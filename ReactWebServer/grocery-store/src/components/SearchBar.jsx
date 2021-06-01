import React, {Component} from 'react';
import './SearchBar.css'
import {connect, useDispatch} from "react-redux";
import {sendFilter} from "../data/actions";
import PropTypes from "prop-types";

class SearchBar extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="search">
                        <form className="pure-form">
                            <input className="fas fa-search"
                                   onChange={event => this.props.setFilterValue(event.target.value)}/>
                        </form>
                    </div>
                </div>
            </div>
        );
}
}

SearchBar.propTypes = {
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
        setFilterValue: (filterValue) => dispatch({type: "FILTER", payload: filterValue}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
