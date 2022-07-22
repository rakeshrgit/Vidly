import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import EditModal from '../common/editmodal'
class Movies extends Component {
    state = { 
        requiredItem: 0,
        movies:getMovies(),
        movie: null,
        isOpen:false
     } 
     handleDelete = (movie) => {
        const movies = this.state.movies.filter(m=> m._id !== movie._id)
        this.setState({movies})
     }
     openModal = (movie) =>{ 
        this.setState({ isOpen: true, movie })
    };
    closeModal = () => this.setState({ isOpen: false });

    handleSave = (_id, title, genre) =>{
     const tempMovies = this.state.movies;
    const updatedMovies = tempMovies.map((movie) => {
      if (movie._id === _id) {
        movie.title = title;
        movie.genre.name = genre;
      }
        return movie;
    });

    this.setState({
      movies: updatedMovies,
      isOpen: false
    });


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
                            <td>
                                <button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm" >Delete</button>
                                <button className="btn btn-primary btn-sm m-2" onClick={()=>this.openModal(movie)}>Edit</button>    
                            </td>
                        </tr>
                        ))}
                        
                        
                    </tbody>
                </table>
                </div>
                {
                    this.state.isOpen && <EditModal
                    onSave={this.handleSave}
                    closeModal ={this.closeModal}
                    showModal = {this.state.isOpen}
                    movie={this.state.movie}
                    
                    /> 
                }            
            </React.Fragment>
        );
    }
}
 
export default Movies;