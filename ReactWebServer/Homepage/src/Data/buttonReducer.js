export const buttonReducer = function (state = {
    url: 'https://xkcd.now.sh/?comic=latest',
    month: '5',
    number: 2465,
    year: '2021',
    news: '',
    safe_title: 'Dimensional Chess',
    transcript: '',
    alt: 'In Dimensional Chess, every move is annotated \'?!\'.',
    img: '',
    title: 'Dimensional Chess',
    day: '19'
}, action) {
    switch (action.type) {
        case "PREVIOUS":
            if (state.number === 1) {
                return state;
            } else {
                console.log('In previous State number: ' + state.number + '  state url: ' + state.url);
                return ({
                    number: state.number - 1,
                    url: ('https://xkcd.now.sh/?comic=' + (state.number - 1))
                })
            }
        case "NEXT":
            console.log('In next State number: ' + state.number + '  state url: ' + state.url);
            return {number: state.number + 1, url: 'https://xkcd.now.sh/?comic=' + (state.number + 1)};
        case "RANDOM":
            console.log('In math State number: ' + state.number + '  state url: ' + state.url);
            let r = (Math.ceil(Math.random() * 100));
            return {number: r, url: 'https://xkcd.now.sh/?comic=' + r};
        default:
            console.log('In default State number: ' + state.number + '  state url: ' + state.url);
            return state;
    }
};

