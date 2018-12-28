import React, { Component } from "react";
import ImgHead from "../components/widget/ImgHead";
import Profile from "../components/layout/Profile";

class Top extends Component {
  render() {
    return (
      <div className="">
        <ImgHead src="img_top.jpg" title="Top" />
        <Profile></Profile>
      </div>
    );
  }
}

export default Top;
