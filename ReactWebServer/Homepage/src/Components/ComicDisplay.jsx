import React from 'react';
import './ComicDisplay.css';

const Child = ({data}) => {
    console.log('in child: ');

    console.log(data);
    return (
        <div>
            <p>{data.img}</p>
            <p>{data.number}</p>
            <p>{data.url}</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>


        </div>
    );
};

export default Child;
