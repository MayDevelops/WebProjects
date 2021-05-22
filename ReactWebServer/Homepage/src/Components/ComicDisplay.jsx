import React, {Component} from 'react';
import './ComicDisplay.css';
import {connect} from 'react-redux';

class ComicDisplay extends Component {
    render() {
        const number = this.props.num;
        const day = this.props.day;
        const month = this.props.month;
        const year = this.props.year;
        return (
            <div className="comicWrapper">
                <span>{this.props.title}</span>
                <img src={this.props.img} alt=''/>
                <span>#{number}, drawn on {day} {month} {year}</span>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        num: state.num,
        url: state.url,
        img: state.img,
        title: state.title,
        day: state.day,
        month: state.month,
        year: state.year,
        alt: state.alt
    };
};

export default connect(mapStateToProps, null)(ComicDisplay);
