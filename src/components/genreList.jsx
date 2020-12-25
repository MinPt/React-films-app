import React, { Component } from "react";
import List from "./сommon/list";
import { getGenres } from "../data/fakeGenreService";

class GenreList extends Component {
  state = {
    genres: [],
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
  }

  render() {
    return (
      <List
        currentGenre={this.props.currentGenre}
        onFilter={this.props.onFilter}
        itemList={this.state.genres}
      />
    );
  }
}

export default GenreList;
