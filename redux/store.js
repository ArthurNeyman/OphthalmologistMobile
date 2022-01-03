import { createStore, combineReducers,applyMiddleware } from 'redux';

import data from './reducers/reducer';

import thunk from "redux-thunk"

const rootReducer = combineReducers({data:data});

const store=createStore(rootReducer,applyMiddleware(thunk));

export default store
