import React, { Component } from "react";
import {
  fetchBlogList,
  fetchBlogDetail,
  resetBlogDetail
} from "../../actions/api_blog";
import { connect } from "react-redux";
import moment from "moment";
import Code from "../widget/Code";
import BlogComment from "../layout/BlogComment";
import { API_ROOT } from "../../config";

class BlogDetail extends Component {
  componentWillMount() {
    this.props.resetBlogDetail().then(() => {
      // urlからuuidを取得
      const urlList = window.location["href"].split("/");
      const urlParams = urlList[urlList.length - 1];

      this.props.fetchBlogDetail(urlParams);
    });
  }
  render() {
    if (this.props.selectedData == undefined) {
      // まだデータが取得できていない時はundefinedになっている
      return <div>データを取得中です</div>;
    } else {
      return (
        <div className="area-BlogDetail">
          <div className="area-main--BlogDetail">
            <h3 className="ttl3--BlogDetail">
              {this.props.selectedData.title}
            </h3>
            <div className="timestamp--BlogDetail">
              <div className="created--BlogDetail">
                <div>作成日:</div>
                <div>
                  {moment(this.props.selectedData.created).format("YYYY/MM/DD")}
                </div>
              </div>
              <div className="edited--BlogDetail">
                <div>最終編集日:</div>
                <div>
                  {moment(this.props.selectedData.edited).format("YYYY/MM/DD")}
                </div>
              </div>
            </div>
            <div className="area-index--BlogDetail">
              <div className="ttl-index--BlogDetail">Table Of Contents</div>
              <nav className="ul-index--BlogDetail">
                {this.props.selectedData.sections.map(section => {
                  return (
                    <li className="li-index--BlogDetail">
                      <a
                        className="lnk-index--BlogDetail"
                        href={`#${section.uuid}`}
                      >
                        {section.title}
                      </a>
                    </li>
                  );
                })}
              </nav>
            </div>
            <div>
              {this.props.selectedData.sections.map(section => {
                return (
                  <div className="area-section-BlogDetail" id={section.uuid}>
                    <h4 className="ttl4--BlogDetail">{section.title}</h4>
                    <div className="area-paragraph--BlogDetail">
                      {section.paragraphs.map(paragraph => {
                        if (paragraph.is_code) {
                          return (
                            <div className="area-code--BlogDetail">
                              <Code
                                code={paragraph.content}
                                lang={paragraph.programing_language}
                              />
                            </div>
                          );
                        }
                        return (
                          <div className="area-paragraph--BlogDetail">
                            {paragraph.image && (
                              <div className="area-image-paragraph--BlogDetail">
                                <img src={`${API_ROOT}${paragraph.image}`} />
                              </div>
                            )}
                            <div className="area-content-paragraph--BlogDetail">
                              {paragraph.content}
                            </div>
                            <br />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <BlogComment comments={this.props.selectedData.comments} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({ selectedData: state.blog.selectedData });

export default connect(
  mapStateToProps,
  { fetchBlogList, fetchBlogDetail, resetBlogDetail }
)(BlogDetail);
