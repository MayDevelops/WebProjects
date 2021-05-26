import React, {Component} from 'react';
import './ProductGrid.css'

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
                                <button className="auto">Add to Cart</button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    };
};

export default Card;
