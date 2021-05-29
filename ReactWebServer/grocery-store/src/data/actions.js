import {store} from "./store";

export const sendFilter = (sentType, filter) => async (dispatch, getState) => {
    store.dispatch({
        type: sentType,
        payload: {
            filter: filter
        }
    })
}

export const sendFilterCountry = (sentType, filterCountry) => async (dispatch, getState) => {
    store.dispatch({
        type: sentType,
        payload: {
            filterCountry: filterCountry
        }
    })
}
