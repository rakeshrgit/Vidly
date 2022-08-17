import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from "../services/fakeGenreService";
import EditModal from '../common/editmodal'
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroup';
import {paginate} from '../utils/paginate';
import MoviesTable from './movieTable';
import { Outlet, Link, NavLink  } from "react-router-dom";
import SearchBox from './searchBox';
import _ from "lodash";
class Movies extends Component {
    state = { 
        requiredItem: 0,
        movies:[],
        genres:[],
        movie: null,
        isOpen:false,
        pageSize:4,
        searchQuery: "",
        currentPage:1
     } 
     componentDidMount() {
        const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];

        this.setState({ movies: getMovies(), genres });
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
       this.setState({ selectedGenre:genre, searchQuery: "", currentPage: 1 })
    }

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
      };
      
    
    handleSort = (path) => {
        console.log('xx')
    }
    getPagedData = () => {
        const {
          pageSize,
          currentPage,
          sortColumn,
          selectedGenre,
          searchQuery,
          movies: allMovies
        } = this.state;
    
        let filtered = allMovies;
        if (searchQuery)
          filtered = allMovies.filter(m =>
            m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
          );
        else if (selectedGenre && selectedGenre._id)
          filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);
    
        const sorted = _.orderBy(filtered);
    
        const movies = paginate(sorted, currentPage, pageSize);
    
        return { totalCount: filtered.length, data: movies };
      };
    render() { 
        const { length: count } = this.state.movies;
    const { pageSize, currentPage,  searchQuery } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const { totalCount, data: movies } = this.getPagedData();
        return (
            <React.Fragment>
                <div className="container">    
                    <div className="row">
                        <div className="col-3">
                            <ListGroup 
                                items={this.state.genres}
                                selectedItem={this.state.selectedGenre}
                                onItemSelect={this.handleGenreSelect}
                            
                            />
                        </div>
                        <div className="col">
                         <SearchBox value={searchQuery} onChange={this.handleSearch} />   
                        <div className="">
                        <NavLink
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </NavLink>   
                        <div>Showing {totalCount} movies</div>   
                        <MoviesTable
                            movies ={movies}
                            onDelete={this.handleDelete}
                            onOpenModal = {this.openModal}
                        />
                        <Pagination
                            itemsCount={totalCount}
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
                </div>            
            </React.Fragment>
        );
    }
}
 
export default Movies;