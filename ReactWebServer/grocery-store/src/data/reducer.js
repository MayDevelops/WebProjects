import mock from "./mock-data";

const initialState = {
    storeData: mock
};

export const reducer = function (state = initialState, action) {

    switch (action.type) {
        case "VIEW":
            return ({
                ...state,
                storeData: action.payload.storeData
            });
        default:
            return state;
    }

}