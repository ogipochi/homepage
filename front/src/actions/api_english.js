import {FETCH_VOCABULARY_LIST,FETCH_SENTENCE_LIST} from "./types";
import {API_ROOT,HEADERS} from "../config";


export const fetchSentenceList = () =>(dispatch)=>{
    // 英語のセンテンスをリストで取得
    // [TODO]ページング
    const url = API_ROOT + "/api/english/sentence_list";
    return fetch(
        url,
        {
            method:"GET",
            headers:HEADERS
        }
    ).then(
        response=>{
            if(!response.ok){
                throw Error(response.statusText)
            }
            return response.json()
        }
    ).then(responseData=>{
        const data = responseData.data;
        dispatch(
            {
                type:FETCH_SENTENCE_LIST,
                payload:data
            }
        )
    })
}