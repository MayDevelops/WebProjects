import React, {Component} from 'react';
import './ProductGrid.css'
import {connect} from "react-redux";

class Card extends Component {
    render() {
        const sentProps = this.props.sentProps;
        return (
            <div className="wrapper">
                <div className="products">
                    <div className="product">
                        <div className="info">
                            <h1>{sentProps.name}</h1>
                            <p>{sentProps.country}</p>
                        </div>
                        <div className="image">
                            <img src={sentProps.image} alt=''/>
                        </div>
                        <div className="price">
                            <h2>{sentProps.price}</h2>
                            <button className="auto hover" onClick={() => {
                                this.props.addToCart(sentProps)
                            }}>Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        storeData: state.storeData,
        cart: state.cart,
        activateCart: state.activateCart
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => dispatch({type: "ADD", payload: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
