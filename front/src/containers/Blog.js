import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlogList,fetchBlogDetail } from "../actions/api_blog";
import ImgHead from "../components/widget/ImgHead";
import { API_ROOT } from "../config";
import moment from "moment";
import { Link } from "react-router-dom";
import BlogList from "../components/layout/BlogList";
import BlogDetail from "../components/layout/BlogDetail";
import { Route} from "react-router-dom";


class Blog extends Component {
  componentWillMount() {
    this.props.fetchBlogList();
  }
  render() {
    return (
      <div className="area--Blog">
        <ImgHead src="img_blog.jpg" title="Blog" />
        <Route path="/blog" exact render={({match}) => (
    <BlogList data={this.props.data} match={match} />
  )}/>
        <Route path="/blog/detail/:uuid" component={BlogDetail}/>
    </div>
    )
  }
}

const mapStateToProps = state => ({ data: state.blog.data });

export default connect(
  mapStateToProps,
  { fetchBlogList,fetchBlogDetail }
)(Blog);
 