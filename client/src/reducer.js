import {Map} from 'immutable'


export default function (state = Map(), action) {
    switch (action.type) {
        case "SET_STATE":
            return state.merge(action.state);
        case "ADD_PHONE":
            return state.update("phones", phones => phones.concat(action.phone));
        case "DELETE_PHONE":
            return state.update("phones",
                phones => phones.filter((phone) => phone !== action.phone))
    }
    return state;
};