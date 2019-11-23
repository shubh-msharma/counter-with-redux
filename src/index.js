import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore , combineReducers}  from 'redux'
import {  Provider  } from 'react-redux'

import CounterReducer from './store/reducer/CounterReducer'
import ResultReducer from './store/reducer/ResultReducer'

const rootReducer = combineReducers({
    ctrReducer:CounterReducer,
    resReducer:ResultReducer
})

const store = createStore(rootReducer)



ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
