import React from 'react';
import './SearchBar.css'
import {connect, useDispatch} from "react-redux";
import {sendFilter} from "../data/actions";

export const SearchBar = () => {

    const dispatch = useDispatch();

    const handleSetFilter = (incomingFilter) => {
        dispatch(sendFilter("FILTER", incomingFilter.toString().toLowerCase()));
    }

        return (
            <div>
                <div className="wrapper">
                    <div className="search">
                        <form className="pure-form">
                            <input className="fas fa-search" onChange={event => handleSetFilter(event.target.value)}/>
                        </form>
                    </div>
                </div>
    </div>
        );
};

const mapStateToProps = state => ({
    filter: state.filter
})

export const a = connect(mapStateToProps)(SearchBar);