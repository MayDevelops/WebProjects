import {connect} from 'react-redux';
import {ButtonSegment} from '../Components/ButtonSegment';

const mapStateToProps = state => {
    return {
        number: state.number,
        url: state.url,
        month: state.month,
        year: state.year,
        news: state.news,
        safe_title: state.safe_title,
        transcript: state.transcript,
        alt: state.alt,
        img: state.img,
        title: state.title,
        day: state.day

    };
};
const mapDispatchToProps = dispatch => {
    return {
        handlePreviousClick: () => dispatch({type: 'PREVIOUS'}),
        handleNextClick: () => dispatch({type: 'NEXT'}),
        handleRandomClick: () => dispatch({type: 'RANDOM'})
    }
};
export const ButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonSegment);