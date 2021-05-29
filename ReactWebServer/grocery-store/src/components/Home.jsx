import React from 'react';
import {SearchBar} from "./SearchBar";
import ProductCard from "./ProductGrid";

const Home = () => {
    return (
        <div>
            <SearchBar/>
            <ProductCard/>
        </div>
    );
};

export default Home;
