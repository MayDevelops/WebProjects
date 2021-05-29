import React, {Component} from 'react';
import './ProductGrid.css'
import {connect} from "react-redux";

class Card extends Component{
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
                                <button className="auto" onClick={() => {this.props.updateCart(this.props.sentProps)}}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
       cart: state.cart
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCart: (item) => dispatch({type: "ADD", payload: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
