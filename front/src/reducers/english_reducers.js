import {FETCH_SENTENCE_LIST} from "../actions/types";


const initialState = {
    sentenceList:[],
}

export default function(state=initialState,action){
    const nextState = Object.assign({},state);
    switch(action.type){
        case FETCH_SENTENCE_LIST:
        nextState.sentenceList = action.payload;
        return nextState;
        default:
        return nextState;
    }
}