import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from "../services/fakeGenreService";
import EditModal from '../common/editmodal'
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroup';
import {paginate} from '../utils/paginate';
class Movies extends Component {
    state = { 
        requiredItem: 0,
        movies:[],
        genres:[],
        movie: null,
        isOpen:false,
        pageSize:4,
        currentPage:1
     } 
     componentDidMount() {
        const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];

        this.setState({ movies: getMovies(), genres:getGenres() });
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
    handlePageChange = (page) =>{
        this.setState({ currentPage:page });    
        //console.log('page', page)
    }
    handleGenreSelect = (genre) =>{
       this.setState({ selectedGenre:genre, currentPage: 1 })
    }
    render() { 
        const {length: count} = this.state.movies;
        const {pageSize, currentPage, selectedGenre, movies:allMovies} = this.state;
        const filtered =
        selectedGenre && selectedGenre._id
          ? allMovies.filter(m => m.genre._id === selectedGenre._id)
          : allMovies;

        const movies = paginate(filtered, currentPage, pageSize  )
        //const{movies} = this.state;
       // console.log('movies', movies)
       if (movies.length === 0) return <p>No Data</p>;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-3">
                        <ListGroup 
                            items={this.state.genres}
                            selectedItem={this.state.selectedGenre}
                            onItemSelect={this.handleGenreSelect}
                        />
                    </div>
                    <div className="col">
                    <div className="">
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
                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanges={this.handlePageChange}

                    />
                    </div>
                    </div>
                    
                    {
                        this.state.isOpen && <EditModal
                        onSave={this.handleSave}
                        closeModal ={this.closeModal}
                        showModal = {this.state.isOpen}
                        movie={this.state.movie}
                        
                        /> 
                    }          
                </div>    
            </React.Fragment>
        );
    }
}
 
export default Movies;