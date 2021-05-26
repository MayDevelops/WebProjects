import React, {Component, Fragment} from 'react';
import './ProductGrid.css';
import {connect} from "react-redux";
import Card from "./Card";

class ProductGrid extends Component {
    render() {
        let items = this.props.storeData;
        return (
            <Fragment>
            <table>
                <tr className="table-row-1">
                    <td><Card sentProps={items[0]}/></td>
                    <td><Card sentProps={items[1]}/></td>
                    <td><Card sentProps={items[2]}/></td>
                    <td><Card sentProps={items[3]}/></td>
                    <td><Card sentProps={items[4]}/></td>
                </tr>
                <tr className="table-row-2">
                    <td><Card sentProps={items[5]}/></td>
                    <td><Card sentProps={items[6]}/></td>
                    <td><Card sentProps={items[7]}/></td>
                    <td><Card sentProps={items[8]}/></td>
                    <td><Card sentProps={items[9]}/></td>
                </tr>
                <tr className="table-row-3">
                    <td><Card sentProps={items[10]}/></td>
                    <td><Card sentProps={items[11]}/></td>
                    <td><Card sentProps={items[12]}/></td>
                    <td><Card sentProps={items[13]}/></td>
                    <td><Card sentProps={items[14]}/></td>
                </tr>
                <tr className="table-row-4">
                    <td><Card sentProps={items[15]}/></td>
                    <td><Card sentProps={items[16]}/></td>
                    <td><Card sentProps={items[17]}/></td>
                    <td><Card sentProps={items[18]}/></td>
                    <td><Card sentProps={items[19]}/></td>
                </tr>
                <tr className="table-row-5">
                    <td><Card sentProps={items[20]}/></td>
                    <td><Card sentProps={items[21]}/></td>
                    <td><Card sentProps={items[22]}/></td>
                    <td><Card sentProps={items[23]}/></td>
                    <td><Card sentProps={items[24]}/></td>
                </tr>
                <tr className="table-row-6">
                    <td><Card sentProps={items[25]}/></td>
                    <td><Card sentProps={items[26]}/></td>
                    <td><Card sentProps={items[27]}/></td>
                    <td><Card sentProps={items[28]}/></td>
                    <td><Card sentProps={items[29]}/></td>
                </tr>
                <tr className="table-row-7">
                    <td><Card sentProps={items[30]}/></td>
                    <td><Card sentProps={items[31]}/></td>
                    <td><Card sentProps={items[32]}/></td>
                    <td><Card sentProps={items[33]}/></td>
                    <td><Card sentProps={items[34]}/></td>
                </tr>
                <tr className="table-row-8">
                    <td><Card sentProps={items[35]}/></td>
                    <td><Card sentProps={items[36]}/></td>
                    <td><Card sentProps={items[37]}/></td>
                    <td><Card sentProps={items[38]}/></td>
                    <td><Card sentProps={items[39]}/></td>
                </tr>
                <tr className="table-row-9">
                    <td><Card sentProps={items[40]}/></td>
                    <td><Card sentProps={items[41]}/></td>
                    <td><Card sentProps={items[42]}/></td>
                    <td><Card sentProps={items[43]}/></td>
                    <td><Card sentProps={items[44]}/></td>
                </tr>
                <tr className="table-row-10">
                    <td><Card sentProps={items[45]}/></td>
                    <td><Card sentProps={items[46]}/></td>
                    <td><Card sentProps={items[47]}/></td>
                    <td><Card sentProps={items[48]}/></td>
                    <td><Card sentProps={items[49]}/></td>
                </tr>
            </table>
            </Fragment>
        );
    }


    // renderRows(items) {
    //     return items.map(function (o) {
    //         return (<tr key={"item-" + o.id}>
    //                 <div className="products">
    //                     <div className="product">
    //                         <div className="info">
    //                             <h1>{o.name}</h1>
    //                             <p>{o.country}</p>
    //                         </div>
    //                         <div className="image">
    //                             <img src={o.image} alt=''/>
    //                         </div>
    //                         <div className="price">
    //                             <h2>{o.price}</h2>
    //                             <button className="auto">Add to Cart</button>
    //                         </div>
    //                     </div>
    //                 </div>
    //
    //
    //             </tr>
    //         )
    //     });
    // }
};


const mapStateToProps = state => {
    return {
        storeData: state.storeData
    };
};

export default connect(mapStateToProps, null)(ProductGrid);


/*
<div className="wrapper">
                    {items.map(item =>
                        <div className="products">
                            <div className="product">
                                <div className="info">
                                    <h1>{item.name}</h1>
                                    <p>{item.country}</p>
                                </div>
                                <div className="image">
                                    <img src={item.image} alt=''/>
                                </div>
                                <div className="price">
                                    <h2>{item.price}</h2>
                                    <button className="auto">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
 */