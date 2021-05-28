import React from 'react';
import Header from "./Header";
import {SearchBar} from "./SearchBar";
import ProductCard from "./ProductGrid";

const Home = () => {
    return (
        <div>
            <Header/>
            <SearchBar/>
            <ProductCard/>
        </div>
    );
};

export default Home;
