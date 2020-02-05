import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppView from "./appview";
import reducer from "./reducer";
import {createStore} from "redux";


var store = createStore(reducer);

debugger
store.dispatch({
    type: "SET_STATE",
    state: {
        phones: [ "iPhone 7 Plus", "Samsung Galaxy A5" ]
    }
});

ReactDOM.render( <Provider store={store}>
    <AppView />
</Provider>, document.getElementById('root'));


serviceWorker.unregister();
