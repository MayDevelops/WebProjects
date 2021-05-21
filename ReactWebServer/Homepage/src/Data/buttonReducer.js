const initialState = {
    url: 'https://xkcd.now.sh/?comic=700',
    month: '',
    num: 700,
    year: '',
    news: '',
    safe_title: '',
    transcript: '',
    alt: '',
    img: 'https://imgs.xkcd.com/comics/complexion.png',
    title: '',
    day: '',
    comments: [{}]
}

export const buttonReducer = function (state = initialState, action) {
    switch (action.type) {
        case "FIRST":
            return ({
                ...state,
                num: action.payload.num,
                url: action.payload.url,
                img: action.payload.img
            })
        case "PREVIOUS":
            if (state.num === 1) {
                return state;
            } else {
                return ({
                    ...state,
                    num: action.payload.num,
                    url: action.payload.url,
                    img: action.payload.img
                })
            }
        case "NEXT":
            return ({
                ...state,
                num: action.payload.num,
                url: action.payload.url,
                img: action.payload.img
            })
        case "RANDOM":
            return ({
                ...state,
                num: action.payload.num,
                url: action.payload.url,
                img: action.payload.img
            })
        case "LAST":
            return ({
                ...state,
                num: action.payload.num,
                url: action.payload.url,
                img: action.payload.img
            })
        case "ADD":
            return ({
                ...state,
                comments: [...state.comments, action.payload.newComment]
            })
        default:
            return state;
    }
};