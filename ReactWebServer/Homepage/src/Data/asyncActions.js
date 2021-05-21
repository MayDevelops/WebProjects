import {buttonStore} from "./store";


export const getComic = (sentType) => async (dispatch, getState) => {
    console.log(sentType);
    const url = getState().url;
    // console.log(url);
    const response = await fetch(url)
        .then(res => res.json());
    // console.log(response);

    // console.log('Calling dispatch: ' + buttonStore.getState().url);
    console.log(response.img);
    let int = parseInt(response.num);
    let randomInt = (Math.ceil(Math.random() * 100));

    if(sentType === "PREVIOUS") {
        buttonStore.dispatch({
            type: "PREVIOUS",
            payload: {
                url: 'https://xkcd.now.sh/?comic=' + (int - 1),
                month: response.month,
                number: int - 1,
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
    } else if (sentType === "NEXT") {
        buttonStore.dispatch({
            type: "NEXT",
            payload: {
                url: 'https://xkcd.now.sh/?comic=' + (int + 1),
                month: response.month,
                number: int + 1,
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
    } else {
        buttonStore.dispatch({
            type: "RANDOM",
            payload: {
                url: 'https://xkcd.now.sh/?comic=' + (randomInt),
                month: response.month,
                number: randomInt,
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


    // console.log(buttonStore.getState());

    // buttonStore.subscribe(() => {
    //     console.log("Store Changed!", buttonStore.getState());
    // });
}
