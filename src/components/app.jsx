import React, { Component } from "react";
import MovieList from "./movieList";
import { getMovies } from "../data/fakeMovieService";

import GenreList from "./genreList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      pageSize: 3,
      currentPage: 1,
      currentGenre: null,
    };
  }

  handleMovieDelete = (movieId) => {
    const newMovieList = this.state.movies.filter(
      (movie) => movie._id !== movieId
    );

    this.setState({ movies: newMovieList });
  };

  handleMoviesRefresh = () => {
    let movies = getMovies();
    this.setState({ movies });
  };

  handleIsLiked = (movie) => {
    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].isLiked = !movies[index].isLiked;
    this.setState({ movies });
    console.log("liked", movie);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  componentDidMount() {
    const movies = getMovies();
    this.setState({ movies });
  }

  handleGenreFilter = (genreName) => {
    this.setState({ currentGenre: genreName });
  };

  render() {
    const { currentPage, pageSize, currentGenre, movies } = this.state;

    return (
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <GenreList
                currentGenre={this.state.currentGenre}
                onFilter={this.handleGenreFilter}
              />
            </div>
            <div className="col">
              {movies.length ? (
                <MovieList
                  handleMoviesRefresh={this.handleMoviesRefresh}
                  onDelete={this.handleMovieDelete}
                  movies={movies}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onLike={this.handleIsLiked}
                  onPageChange={this.handlePageChange}
                  currentGenre={currentGenre}
                />
              ) : (
                <React.Fragment>
                  <h1>There is no movies</h1>
                  <button
                    className="btn btn-success"
                    onClick={this.handleMoviesRefresh}
                  >
                    Refresh
                  </button>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
