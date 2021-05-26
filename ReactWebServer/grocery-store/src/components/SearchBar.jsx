import React, {Component} from 'react';
import './SearchBar.css'


class SearchBar extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="search">
                        <form className="pure-form">
                            <i className="fas fa-search"/><input/>
                        </form>
                    </div>
                </div>
    </div>
        );
    }
};

export default SearchBar;

/**
 * Quick thoughts before I retire to mattress:
 * The search bar needs to filter asynchronously, as I type the items should be filtered.
 *      -First just worry about type and click.
 *      -Second, set up useState to be able to constantly display whatever is in the state
 *      -Third, going to have to link it all up to the store to be able to do this...?
 */
