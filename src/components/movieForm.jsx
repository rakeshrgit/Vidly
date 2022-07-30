import React, { Component } from 'react';
import Form from "../common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Component {
  state = {  } 
  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

   
  }
  render() { 
    return (
      <div>
          <div className="container">
            Movies
          </div>
      </div>
    );
  }
}
 
export default MovieForm;