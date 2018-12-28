import React from "react";
import moment from "moment";

const BlogComment = props => {
  return (
    <div className="area--BlogComment">
      <div className="ttl--BlogComment">コメント</div>
      <div className="area-comment--BlogComment">
        {props.comments.map(comment => {
          return (
            <div className="box-comment--BlogComment">
              {comment.name}
              {comment.message}
              {moment(comment.created).format("YYYY/MM/DD")}
              <button>返信</button>
              <div className="area-reply--BlogComment">
                {comment.reply_list.map(reply => {
                  return (
                    <div className="box-reply--BlogComment">
                      {reply.message}
                      {reply.name}
                      {moment(reply.created).format("YYYY/MM/DD")}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogComment;
