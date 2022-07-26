import React, { Component } from 'react';
const MoviesTable = (props) => {
    const {movies, onDelete, onOpenModal, onSort} = props;
    return ( 
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
                        <button onClick={()=>onDelete(movie)} className="btn btn-danger btn-sm" >Delete</button>
                        <button className="btn btn-primary btn-sm m-2" onClick={()=>onOpenModal(movie)}>Edit</button>    
                    </td>
                </tr>
                ))}
                
                
            </tbody>
        </table>
     );
}
 
export default MoviesTable;