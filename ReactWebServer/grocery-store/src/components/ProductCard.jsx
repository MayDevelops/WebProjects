import React, {Component} from 'react';
import './ProductList.css';
import {connect} from "react-redux";


class ProductCard extends Component {
    render() {
        let cards = [];
        let card;

        for(const [index, value] of this.props.storeData.entries()) {
            card += <div>
            cards.push(card);
        }


        return (
            <div>

            </div>

        );
    }
};

const mapStateToProps = state => {
    return {
        storeData: state.storeData
    };
};

export default connect(mapStateToProps, null)(ProductCard);




/*
<div className="wrapper">
                <div className="products">
                    <div className="product">
                        <div className="info">
                            <h1>product.name</h1>
                            <p>product.country</p>
                        </div>
                        <div className="image">
                            <img src="#"/>
                        </div>
                        <div className="price">
                            <h2>product.price</h2>
                            <button className="auto">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
 */