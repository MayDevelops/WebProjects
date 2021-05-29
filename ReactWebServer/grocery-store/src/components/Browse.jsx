import React from 'react';
import './Browse.css';
import ProductGrid from "./ProductGrid";
import {connect, useDispatch} from "react-redux";
import {sendFilterCountry} from "../data/actions";

export const Browse = () => {
    const dispatch = useDispatch();

   function handleFilter(incomingFilter) {
       dispatch(sendFilterCountry("FILTER_COUNTRY", incomingFilter.target.innerText.toString().toLowerCase()));
   }

    return (
        <div>
            <div>
                <div className="pure-menu pure-menu-horizontal">
                    <ul className="pure-menu-list">
                        <li className="pure-menu-item"><a className="pure-menu-link" onClick={event => handleFilter(event)}>United States</a></li>
                        <li className="pure-menu-item"><a className="pure-menu-link" onClick={event => handleFilter(event)}>Canada</a></li>
                        <li className="pure-menu-item"><a className="pure-menu-link" onClick={event => handleFilter(event)}>Brazil</a></li>
                        <li className="pure-menu-item"><a className="pure-menu-link" onClick={event => handleFilter(event)}>Mexico</a></li>
                    </ul>
                </div>
            </div>
        <ProductGrid />
        </div>
    );
};

const mapStateToProps = state => ({
    filterCountry: state.filterCountry
})

export const a = connect(mapStateToProps)(Browse);