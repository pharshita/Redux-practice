import { combineReducers } from 'redux';
import ApiReducer from './ApiReducer';
import counter from './Counter';
import TodoReducer from './TodoReducer';
import NewReducer from './TodoReducer';

export default combineReducers({
    ApiReducer,
    counter,
    TodoReducer,
    NewReducer,
})