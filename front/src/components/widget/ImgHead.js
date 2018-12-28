import React from "react";
import { API_ROOT } from "../../config";

const ImgHead =(props)=>{
    return (
        <div className="area--ImgHead"
        style={
                {
                    backgroundImage:`url(${API_ROOT}/static/img/${props.src})`,
            }
                }
        >
        <h2 className="title--ImgHead">{props.title}</h2>
        </div>
    )
}

export default ImgHead;