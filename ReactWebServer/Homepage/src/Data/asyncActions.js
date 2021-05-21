import {buttonStore} from "./store";

export const getFirstComic = (sentType) => async (dispatch, getState) => {
    const url = 'https://xkcd.now.sh/?comic=1';
    const response = await fetch(url)
        .then(res => res.json());
    let num = parseInt(response.num);

    buttonStore.dispatch({
        type: sentType,
        payload: {
            url: 'https://xkcd.now.sh/?comic=',
            month: response.month,
            num: num,
            year: response.year,
            news: response.news,
            safe_title: response.safe_title,
            transcript: response.transcript,
            alt: response.alt,
            img: response.img,
            title: response.title,
            day: response.day
        }
    })
}

export const getPreviousComic = (sentType) => async (dispatch, getState) => {
    let bs = buttonStore.getState();
    const urlInt = parseInt(bs.num);
    const url = 'https://xkcd.now.sh/?comic=' + (urlInt - 1);
    const response = await fetch(url)
        .then(res => res.json());

    let num = parseInt(response.num);

    buttonStore.dispatch({
        type: "PREVIOUS",
        payload: {
            url: 'https://xkcd.now.sh/?comic=',
            month: response.month,
            num: num,
            year: response.year,
            news: response.news,
            safe_title: response.safe_title,
            transcript: response.transcript,
            alt: response.alt,
            img: response.img,
            title: response.title,
            day: response.day
        }
    })
}
export const getNextComic = (sentType) => async (dispatch, getState) => {
    let bs = buttonStore.getState();
    const urlInt = parseInt(bs.num);
    const url = 'https://xkcd.now.sh/?comic=' + (urlInt + 1);
    const response = await fetch(url)
        .then(res => res.json());

    let num = parseInt(response.num);

    buttonStore.dispatch({
        type: "NEXT",
        payload: {
            url: 'https://xkcd.now.sh/?comic=',
            month: response.month,
            num: num,
            year: response.year,
            news: response.news,
            safe_title: response.safe_title,
            transcript: response.transcript,
            alt: response.alt,
            img: response.img,
            title: response.title,
            day: response.day
        }
    })
}
export const getRandomComic = (sentType) => async (dispatch, getState) => {
    let randomNum = (Math.ceil(Math.random() * 100));
    const url = 'https://xkcd.now.sh/?comic=' + (randomNum);
    const response = await fetch(url)
        .then(res => res.json());

    let num = parseInt(response.num);

    buttonStore.dispatch({
        type: sentType,
        payload: {
            url: 'https://xkcd.now.sh/?comic=',
            month: response.month,
            num: num,
            year: response.year,
            news: response.news,
            safe_title: response.safe_title,
            transcript: response.transcript,
            alt: response.alt,
            img: response.img,
            title: response.title,
            day: response.day
        }
    })
}

export const getLastComic = (sentType) => async (dispatch, getState) => {
    const url = 'https://xkcd.now.sh/?comic=latest';
    const response = await fetch(url)
        .then(res => res.json());

    let num = parseInt(response.num);

    buttonStore.dispatch({
        type: sentType,
        payload: {
            url: 'https://xkcd.now.sh/?comic=',
            month: response.month,
            num: num,
            year: response.year,
            news: response.news,
            safe_title: response.safe_title,
            transcript: response.transcript,
            alt: response.alt,
            img: response.img,
            title: response.title,
            day: response.day
        }
    })
}

export const addComment = (sentType, setUserName, setUserComment) => async (dispatch, getState) => {

    buttonStore.dispatch({
        type: sentType,
        payload: {
            newComment: {
                userName: setUserName,
                userComment: setUserComment
            }
        }
    })

    console.log(buttonStore.getState().comments);
}