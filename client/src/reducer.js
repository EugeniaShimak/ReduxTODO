import {Map} from 'immutable'

export const reducer = function (state = Map(), action) {
    debugger
    switch (action.type) {
        case "SET_STATE":
            return state.merge(action.state);
        case "ADD_PHONE":
            return state.update("phones", (phones) => {
                debugger;
                return phones.push(action.phone)
            });
        case "DELETE_PHONE":
            return state.update("phones",
                (phones) => {debugger
                    phones.forEach((phone, index) => {
                        if (phone === action.phone) {
                            phones.splice(index, 1);
                            break;
                        }
                    })
                }
            );
    }
    return state;
};