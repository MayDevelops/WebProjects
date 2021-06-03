import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import ProductCard from "./ProductGrid";

import { push } from 'connected-react-router'

class Home extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <ProductCard/>
            </div>
        );
    }
};

export default Home;
