import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "";
    if (this.props.movie.isLiked) {
      classes += "fas fa-heart";
    } else {
      classes += "far fa-heart";
    }
    return (
      <div
        className="wrapper"
        onClick={() => this.props.onLike(this.props.movie)}
      >
        <i className={classes}></i>
      </div>
    );
  }
}

export default Like;
