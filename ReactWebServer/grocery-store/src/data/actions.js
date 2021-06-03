import configureStore from "./store";

export const sendFilter = (sentType, filter) => async (dispatch, getState) => {
    configureStore.dispatch({
        type: sentType,
        payload: {
            filter: filter
        }
    })
}

export const sendFilterCountry = (sentType, filterCountry) => async (dispatch, getState) => {
    configureStore.dispatch({
        type: sentType,
        payload: {
            filterCountry: filterCountry
        }
    })
}
