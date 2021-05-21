import React, {Component} from 'react';
import './ComicDisplay.css';
import {connect} from 'react-redux';

class ComicDisplay extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
                <h1>{this.props.url}</h1>
                <img src = {this.props.img}/>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        number: state.number,
        url: state.url,
        img: state.img
    };
};

export default connect(mapStateToProps, null)(ComicDisplay);
