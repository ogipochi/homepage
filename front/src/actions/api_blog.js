import {FETCH_BLOG_LIST,FETCH_BLOG_DETAIL,RESET_BLOG_DETAIL} from "./types";
import {API_ROOT,HEADERS} from "../config";


export const fetchBlogList = ()=>(dispatch)=>{
    // ブログのリストを取得
    // [TODO]ページング
    const url = API_ROOT+"/api/blog/blog_list"
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
            return response.json();
        }
    ).then(
        responseData=>{
            const data = responseData.data;
            dispatch(
                {
                    type:FETCH_BLOG_LIST,
                    payload:data
                }
            )
        }
    )
}

export const fetchBlogDetail = (uuid) => (dispatch)=>{
    const url = API_ROOT + "/api/blog/blog_detail/" + uuid;
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
        dispatch({
            type:FETCH_BLOG_DETAIL,
            payload:responseData
        })
    })
}
export const resetBlogDetail = ()=>(dispatch)=>{
    const promise = new Promise((resolve,reject)=>{
        dispatch({
            type:RESET_BLOG_DETAIL
        })
        resolve();
    });
    return promise;
}