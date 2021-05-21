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
        previousClick: () => dispatch({type: 'PREVIOUS'}),
        nextClick: () => dispatch({type: 'NEXT'}),
        randomClick: () => dispatch({type: 'RANDOM'})
    }
};
export const ButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonSegment);