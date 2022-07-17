import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = { 
        movies:getMovies()
     } 
     handleDelete = (movie) => {
        const movies = this.state.movies.filter(m=> m._id !== movie._id)
        this.setState({movies})
     }
    render() { 
        const{movies} = this.state;
       // console.log('movies', movies)
       if (movies.length === 0) return <p>No Data</p>;
        return (
            <React.Fragment>
                <div className="container">
                 <div>Showing {movies.length} movies</div>   
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie=> (
                            <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm" >Delete</button></td>
                        </tr>
                        ))}
                        
                        
                    </tbody>
                </table>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Movies;