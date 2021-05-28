import React, {useState} from 'react';
import './SearchBar.css'
import {connect, useDispatch} from "react-redux";
import {sendFilter} from "../data/actions";


export const SearchBar = () => {
    const [filter, setFilter] = useState('');

    const dispatch = useDispatch();

    const handleSetFilter = (incomingFilter) => {
        setFilter(incomingFilter);
        dispatch(sendFilter("FILTER", incomingFilter));
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