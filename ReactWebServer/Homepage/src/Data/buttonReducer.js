const initialState = {
    url: 'https://xkcd.now.sh/?comic=700',
    month: '2',
    num: 700,
    year: '2010',
    news: '',
    safe_title: 'Complexion',
    transcript: '',
    alt: 'Why do all my attempts at science end with me being punched by Batman?  (P.S. benzoyl peroxide soap works great.)',
    img: 'https://imgs.xkcd.com/comics/complexion.png',
    title: 'Complexion',
    day: '10',
    comments: [{}],
    ratings: [{}]
}

export const buttonReducer = function (state = initialState, action) {
    switch (action.type) {
        case "FIRST":
            return ({
                ...state,
                num: action.payload.num,
                url: action.payload.url,
                img: action.payload.img,
                title: action.payload.title,
                day: action.payload.day,
                month: action.payload.month,
                year: action.payload.year,
                alt: action.payload.alt

            })
        case "PREVIOUS":
            if (state.num === 1) {
                return state;
            } else {
                return ({
                    ...state,
                    num: action.payload.num,
                    url: action.payload.url,
                    img: action.payload.img,
                    title: action.payload.title,
                    day: action.payload.day,
                    month: action.payload.month,
                    year: action.payload.year,
                    alt: action.payload.alt
                })
            }
        case "NEXT":
            return ({
                ...state,
                num: action.payload.num,
                url: action.payload.url,
                img: action.payload.img,
                title: action.payload.title,
                day: action.payload.day,
                month: action.payload.month,
                year: action.payload.year,
                alt: action.payload.alt
            })
        case "RANDOM":
            return ({
                ...state,
                num: action.payload.num,
                url: action.payload.url,
                img: action.payload.img,
                title: action.payload.title,
                day: action.payload.day,
                month: action.payload.month,
                year: action.payload.year,
                alt: action.payload.alt
            })
        case "LAST":
            return ({
                ...state,
                num: action.payload.num,
                url: action.payload.url,
                img: action.payload.img,
                title: action.payload.title,
                day: action.payload.day,
                month: action.payload.month,
                year: action.payload.year,
                alt: action.payload.alt
            })
        case "ADD":
            return ({
                ...state,
                comments: [...state.comments, action.payload.newComment]
            })
        case "ADD_STARS":
            return ({
                ...state,
                ratings: [...state.ratings, action.payload.newRating]
            })
        default:
            return state;
    }
};