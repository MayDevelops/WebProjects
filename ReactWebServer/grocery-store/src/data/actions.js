import {store} from "./store";

export const sendFilter = (sentType, filter) => async (dispatch, getState) => {
    store.dispatch({
        type: sentType,
        payload: {
            filter: filter
        }
    })
}