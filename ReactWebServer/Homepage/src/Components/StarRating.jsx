import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Box from '@material-ui/core/Box';

import {connect, useDispatch} from "react-redux";
import { addStars} from "../Data/asyncActions";
import './StarRating.css';


const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon/>,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon/>,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon/>,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon/>,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon/>,
        label: 'Very Satisfied',
    },
};

function IconContainer(props) {
    const {value, ...other} = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};

export const CustomizedRatings = () => {
    const dispatch = useDispatch();

    const handleAddStars = (props) => {
        const starValue = props.target.attributes[1].value;
        let stars = starValue.substring(17, starValue.length);
        if (stars !== '') {
            switch (stars) {
                case '4-5': {
                    dispatch(addStars("ADD_STARS", 4.5, false));
                }
                    break;
                case '3-5': {
                    dispatch(addStars("ADD_STARS", 3.5, false));
                }
                    break;
                case '2-5': {
                    dispatch(addStars("ADD_STARS", 2.5, false));
                }
                    break;
                case '1-5': {
                    dispatch(addStars("ADD_STARS", 1.5, false));
                }
                    break;
                case '0-5': {
                    dispatch(addStars("ADD_STARS", 0.5, false));
                }
                    break;
                default: {
                    dispatch(addStars("ADD_STARS", stars, true));
                }
            }
        }
    }
    return (
        <div className="ratingWrapper">
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                    onClick={handleAddStars}
                    name="customized-empty"
                    defaultValue={5}
                    precision={0.5}
                    emptyIcon={<StarBorderIcon fontSize="inherit"/>}
                />
            </Box>
        </div>
    );
}

const mapStateToProps = state => ({
    ratings: state.ratings
});

export const a = connect(mapStateToProps)(CustomizedRatings);



