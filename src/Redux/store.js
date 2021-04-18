import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { data, tabSelected, filters } from './Reducers/reducers';

const store = combineReducers({
    data,
    tabSelected,
    filters
})

export default createStore(store, applyMiddleware(thunk));