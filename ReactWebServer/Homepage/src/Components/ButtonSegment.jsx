import React from 'react';
import {getComic} from "../Data/asyncActions";
import {useDispatch} from "react-redux";

export const ButtonSegment = () => {
    const dispatch = useDispatch();

    const handlePreviousClick = () => {
        dispatch(getComic("PREVIOUS"));
    }
    const handleNextClick = () => {
        dispatch(getComic("NEXT"));
    }
    const handleRandomClick = () => {
        dispatch(getComic("RANDOM"));
    }

    return (
        <div className="buttonWrapper">
            <div className="center">
                <button onClick={handlePreviousClick}>Previous</button>
                <button onClick={handleNextClick}>Next</button>
                <button onClick={handleRandomClick}>Random</button>
            </div>
        </div>
    );
};

