import React, { Component } from "react";
import Like from "./сommon/like";
import { paginate } from "../utils/paginate";
import Pagination from "./сommon/pagination";
class MovieList extends Component {
  render() {
    let {
      currentPage,
      pageSize,
      onPageChange,
      movies,
      currentGenre,
    } = this.props;

    if (movies.length === 0) {
      onPageChange(currentPage - 1);
    }

    const filtered =
      currentGenre !== null
        ? movies.filter((m) => m.genre.name === currentGenre)
        : movies;
    console.log("filtered length", filtered.length);
    movies = paginate(filtered, currentPage, pageSize);
    console.log("movies length", movies.length);

    return (
      <React.Fragment>
        {movies.length !== 0 && (
          <p className="mt-3">
            Showing {filtered.length} movies in the database
          </p>
        )}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col">
                <button
                  onClick={() => this.props.handleMoviesRefresh()}
                  className="btn btn-sm btn-success"
                >
                  Refresh
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              const {
                title,
                genre,
                numberInStock,
                dailyRentalRate,
                _id,
              } = movie;
              return (
                <tr scope="row" key={_id}>
                  <th>{title}</th>
                  <td>{genre.name}</td>
                  <td>{numberInStock}</td>
                  <td>{dailyRentalRate}</td>
                  <td>
                    <Like movie={movie} onLike={this.props.onLike} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.props.onDelete(_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          itemsCount={filtered.length}
          pageSize={pageSize}
          onPageChange={this.props.onPageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default MovieList;
