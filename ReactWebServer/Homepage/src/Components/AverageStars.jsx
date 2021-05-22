import React, {Component} from 'react';
import './AverageStars.css';
import {connect} from 'react-redux';

class AverageStars extends Component {
    render() {
        let ratings = this.props.ratings;
        let i;
        let comicNumber = this.props.num;
        let averageStars = 0;

        if(ratings.length > 1)
        for (i = 1; i < ratings.length; i++) {
            //console.log('ComicNumber: ' + comicNumber);
            //console.log('Ratings[i].comicNum: ' + ratings[i].comicNum);
            if (comicNumber === ratings[i].comicNum) {
                averageStars += ratings[i].ratings.stars;
            }
        }

        averageStars = (averageStars / (ratings.length - 1)).toFixed(2);


        return (
            <div className="ratingWrapper">
               <span> Average rating: {averageStars} </span>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        num: state.num,
        ratings: state.ratings
    };
};

export default connect(mapStateToProps, null)(AverageStars);
