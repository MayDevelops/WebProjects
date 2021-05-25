import {store} from "./store";

export const getMockData = (sentType) => async (dispatch, getState) => {
    store.dispatch({
        type: sentType,
        payload: {
            storeData: [{
                id: 1,
                name: "Egg Salad",
                price: "$5.62",
                country: "United States",
                image: 'egg-salad.jpg'
            },
                {
                    id: 2,
                    name: "Sweet Potato",
                    price: "$2.41",
                    country: "Brazil",
                    image: "sweet-potato.jpg"
                },
                {
                    id: 3,
                    name: "Foccacia Bread",
                    price: "$5.92",
                    country: "United States",
                    image: 'focaccia.jpg'
                }]
        }
    })
}