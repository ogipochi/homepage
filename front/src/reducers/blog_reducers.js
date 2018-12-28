import {FETCH_BLOG_LIST,RESET_BLOG_DETAIL,FETCH_BLOG_DETAIL} from "../actions/types";


const initialState = {data:[],selectedData:undefined}


export default function(state=initialState,action){
    const nextState = Object.assign({},state);
    switch(action.type){
        case FETCH_BLOG_LIST:
        nextState.data = action.payload;
        return nextState;
        case RESET_BLOG_DETAIL:
        nextState.selectedData = undefined
        return nextState;
        case FETCH_BLOG_DETAIL:
        nextState.selectedData = action.payload.data;
        return nextState;
        default:
        return nextState;
    }
}