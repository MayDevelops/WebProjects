import React from 'react';
import './ComicDisplay.css';
import axios from 'axios';

const ComicDisplay = () => {


    let data = {
        number: '',
        current: {
            title: 'title',
            safeTitle: 'safeTitle',
            img: 'https://imgs.xkcd.com/comics/dimensional_chess.png',
            alt: 'alt',
            num: '69',
            day: '01',
            month: 'January',
            year: '2001'
        },
        isLoading: false
    }

    async function created() {
        try {
            this.loading = true;
            let url = 'https://xkcd.now.sh/?comic=';
            if (this.number === '') {
                url += 'latest';
            } else {
                url += this.number;
            }
            const response = await axios.get(url);
            this.current = response.data;
            this.loading = false;
            this.number = response.data.num;
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="comicWrapper">
            {data.isLoading ?
                <React.Fragment>
                    <div className="verticalSpacer"/>
                    <span className="center">PAGE IS LOADING</span>
                </React.Fragment>

                :
                <React.Fragment>
                    <div className="verticalSpacer"/>
                    <h1 className="center">{data.current.safeTitle}</h1>
                    <img src={data.current.img} alt={data.current.alt} className="center"/>
                    <p className="center">{data.current.alt}</p>
                    <h5 className="center">#{data.current.num} drawn
                        on {data.current.month}/{data.current.day}/{data.current.year}</h5>
                </React.Fragment>
            }
        </div>

    );
}

export default ComicDisplay;
