import React from 'react';
import './ButtonSegment.css';
import {getFirstComic, getLastComic,getNextComic,getPreviousComic,getRandomComic} from "../Data/asyncActions";
import {connect, useDispatch} from "react-redux";

export const ButtonSegment = () => {
    const dispatch = useDispatch();

    const handleFirstClick = () => {
        dispatch(getFirstComic("FIRST"));
    }
    const handlePreviousClick = () => {
        dispatch(getPreviousComic("PREVIOUS"));
    }
    const handleNextClick = () => {
        dispatch(getNextComic("NEXT"));
    }
    const handleRandomClick = () => {
        dispatch(getRandomComic("RANDOM"));
    }
    const handleLastClick = () => {
        dispatch(getLastComic("LAST"));
    }

    return (
        <div className="buttonWrapper">
                <button onClick={handleFirstClick}>First</button>
                <button onClick={handlePreviousClick}>Previous</button>
                <button onClick={handleNextClick}>Next</button>
                <button onClick={handleRandomClick}>Random</button>
                <button onClick={handleLastClick}>Last</button>
        </div>
    );
};

const mapStateToProps = state => ({
    num: state.num,
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
});

export const a = connect(mapStateToProps)(ButtonSegment);