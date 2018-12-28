import React from "react";
import { Link } from "react-router-dom";
import { API_ROOT } from "../../config";
import moment from "moment";

const BlogList = props => {
  return (
    <div className="area-main--BlogList">
      {props.data.map(data => {
        return (
          <div className="lnk-detail--BlogList">
            <Link to={`/blog/detail/${data["uuid"]}`}>
              <img
                src={API_ROOT + data["main_image"]}
                className="img-card--BlogList"
              />
            </Link>
            <Link
              className="ttl-card--BlogList"
              to={`/blog/detail/${data["uuid"]}`}
            >
              {data["title"]}
            </Link>
            <div className="sub-card--BlogList">
              <div className="created-card--BlogList">
                {moment(data["created"]).format("YYYY/MM/DD")}
              </div>
              <div className="area-taglist--BlogList">
              <img src={`${API_ROOT}/static/img/icon_tag.png`} className="icon-tag--BlogList"/>
                {data.tags.map(tag => {
                  return (
                    <div className="tag-card--BlogList">{tag["name"]}</div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default BlogList;
