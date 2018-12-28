import {combineReducers} from 'redux';
import blog_reducers from './blog_reducers';
import english_reducers from "./english_reducers";

export default combineReducers({
    blog:blog_reducers,
    english:english_reducers,
});