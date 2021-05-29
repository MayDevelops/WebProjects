import React, {Component, Fragment} from 'react';
import './ProductGrid.css';
import {connect} from "react-redux";
import Card from "./Card";
import emptyImage from '../images/empty.png'

class ProductGrid extends Component {
    render() {
        let filterCountry = this.props.filterCountry;
        let filter = this.props.filter;
        let items = this.props.storeData;
        let filteredItems = [];
        let renItems = [];

        if (filter !== '' && filterCountry === '') {
            for (let i = 0; i < items.length; i++) {
                if (((items[i].name).toString().toLowerCase()).includes((filter))) {
                    filteredItems.push(items[i])
                }
            }
            items = filteredItems;
        } else if (filterCountry !== '') {
            for (let i = 0; i < items.length; i++) {
                if (((items[i].country).toString().toLowerCase()).includes((filterCountry))) {
                    filteredItems.push(items[i])
                }
            }
            items = filteredItems;
        }

        if (items.length === 0) {
            return (
                <div className="center wrapper">
                    <img src={emptyImage} alt=''/>
                    <h2>Sorry! Your search did not return any results!</h2>
                </div>
            );

        } else {

            let loopy = [];
            for (let i = 0; i < (items.length / 5); i++) {
                loopy.push(i);
            }

            let itemsLength = 0;
            let row = 0;
            // eslint-disable-next-line array-callback-return
            renItems = loopy.map(o => {
                itemsLength = (items.length);
                let boo = (items.length < 5);
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
}

const mapStateToProps = state => {
    return {
        storeData: state.storeData,
        filter: state.filter,
        filterCountry: state.filterCountry
    };
}

export default connect(mapStateToProps, null)(ProductGrid);
