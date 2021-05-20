import React, {Component} from 'react';
import './ComicDisplay.css';
import {connect} from 'react-redux';
import ComicDisplay from "./ComicDisplay";

class ComicFetch extends Component {
    componentDidMount() {
        console.log('In mount');
        fetch(this.props.url)
            .then(resp => resp.json())
            .then(data => this.setState({data}));
    }

    render() {
        return (
            <div>
                <h1>{this.props.num} {this.props.url}</h1>
                <ComicDisplay data={this.props}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        number: state.number,
        url: state.url,
        img: state.img
    };
};

export default connect(mapStateToProps, null)(ComicFetch);