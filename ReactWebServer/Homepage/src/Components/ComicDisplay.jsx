import React, {Component} from 'react';
import './ComicDisplay.css';
import {connect} from 'react-redux';

class ComicDisplay extends Component {
    render() {
        const number = this.props.num;
        const day = this.props.day;
        let month = this.props.month;
        const year = this.props.year;

        switch (month) {
            case '1': {
                month = "January";
            }
                break;
            case '2': {
                month = "February";
            }
                break;
            case '3': {
                month = "March";
            }
                break;
            case '4': {
                month = "April";
            }
                break;
            case '5': {
                month = "May";
            }
                break;
            case '6': {
                month = "June";
            }
                break;
            case '7': {
                month = "July";
            }
                break;
            case '8': {
                month = "August";
            }
                break;
            case '9': {
                month = "September";
            }
                break;
            case '10': {
                month = "October";
            }
                break;
            case '11': {
                month = "November";
            }
                break;
            case '12': {
                month = "December";
            }
                break;
        }


        return (
            <div className="comicWrapper">
                <span>{this.props.title}</span>
                <img src={this.props.img} alt=''/>
                <span>{this.props.alt}</span>
                <span>#{number}, drawn on {month} {day} {year}</span>
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
