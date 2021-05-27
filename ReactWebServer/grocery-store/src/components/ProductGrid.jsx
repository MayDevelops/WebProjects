import React, {Component, Fragment} from 'react';
import './ProductGrid.css';
import {connect} from "react-redux";
import Card from "./Card";

class ProductGrid extends Component {
    render() {
        let items = this.props.storeData;
        let loopy = [];
        for (let i = 0; i < (items.length / 5); i++) {
            loopy.push(i);
        }

        let itemsLength = 0;
        let row = 0;
        // eslint-disable-next-line array-callback-return
        const renItems = loopy.map(o => {
            itemsLength = (items.length);
            console.log(itemsLength);

            let boo = (items.length < 5);
            console.log(boo);

            if (boo) {
                if (itemsLength === 4) {
                    let tempItems = items.slice(0, 4);
                    items.splice(0, 4);
                    row++;

                    return (
                        <tr key={row} className="productsRow">
                            <td key={tempItems[0].id}><Card sentProps={tempItems[0]}/></td>
                            <td key={tempItems[1].id}><Card sentProps={tempItems[1]}/></td>
                            <td key={tempItems[2].id}><Card sentProps={tempItems[2]}/></td>
                            <td key={tempItems[3].id}><Card sentProps={tempItems[3]}/></td>
                        </tr>
                    )
                } else if (itemsLength === 3) {
                    let tempItems = items.slice(0, 3);
                    items.splice(0, 3);
                    row++;

                    return (
                        <tr key={row} className="productsRow">
                            <td key={tempItems[0].id}><Card sentProps={tempItems[0]}/></td>
                            <td key={tempItems[1].id}><Card sentProps={tempItems[1]}/></td>
                            <td key={tempItems[2].id}><Card sentProps={tempItems[2]}/></td>
                        </tr>
                    )
                } else if (itemsLength === 2) {
                    let tempItems = items.slice(0, 2);
                    items.splice(0, 2);
                    row++;

                    return (
                        <tr key={row} className="productsRow">
                            <td key={tempItems[0].id}><Card sentProps={tempItems[0]}/></td>
                            <td key={tempItems[1].id}><Card sentProps={tempItems[1]}/></td>
                        </tr>
                    )
                } else if (itemsLength === 1) {
                    let tempItems = items.slice(0, 1);
                    items.splice(0, 1);
                    row++;

                    return (
                        <tr key={row} className="productsRow">
                            <td key={tempItems[0].id}><Card sentProps={tempItems[0]}/></td>
                        </tr>
                    )
                }
            } else {
                let tempItems = items.slice(0, 5);
                items.splice(0, 5);
                row++;

                return (
                    <tr key={row} className="productsRow">
                        <td key={tempItems[0].id}><Card sentProps={tempItems[0]}/></td>
                        <td key={tempItems[1].id}><Card sentProps={tempItems[1]}/></td>
                        <td key={tempItems[2].id}><Card sentProps={tempItems[2]}/></td>
                        <td key={tempItems[3].id}><Card sentProps={tempItems[3]}/></td>
                        <td key={tempItems[4].id}><Card sentProps={tempItems[4]}/></td>
                    </tr>
                )
            }
        });

        return (
            <Fragment>
                <table>
                    <tbody>
                    {renItems}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        storeData: state.storeData
    };
}

export default connect(mapStateToProps, null)(ProductGrid);
