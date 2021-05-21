

const initialState = {
    url: 'https://xkcd.now.sh/?comic=latest',
    month: '',
    number: 10,
    year: '',
    news: '',
    safe_title: '',
    transcript: '',
    alt: '',
    img: 'https://imgs.xkcd.com/comics/dimensional_chess.png',
    title: '',
    day: ''
}

export const buttonReducer = function (state = initialState, action) {
    switch (action.type) {
        case "PREVIOUS":
            if (state.number === 1) {
                return state;
            } else {
                // console.log('In previous State number: ' + state.number + '  state url: ' + state.url);
                // console.log('action payload testing: ' + action.payload.test);
                return ({
                    ...state,
                    number: action.payload.number,
                    url: action.payload.url,
                    img: action.payload.img
                })
            }
        case "NEXT":
            return ({
                ...state,
                number: action.payload.number,
                url: action.payload.url,
                img: action.payload.img
            })
        case "RANDOM":
            return ({
                ...state,
                number: action.payload.number,
                url: action.payload.url,
                img: action.payload.img
            })
        default:
            return state;
    }
};

