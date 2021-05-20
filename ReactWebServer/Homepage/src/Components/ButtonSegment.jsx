import React from 'react';

export const ButtonSegment = ({handlePreviousClick, handleNextClick, handleRandomClick}) => (
    <div className="buttonWrapper">
        <div className="center">
            <button onClick={handlePreviousClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
            <button onClick={handleRandomClick}>Random</button>
        </div>
    </div>
);