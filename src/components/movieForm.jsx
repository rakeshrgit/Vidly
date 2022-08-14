import React, { Component } from 'react';
import Joi from "joi-browser";
import { saveMovie } from '../services/fakeMovieService';
import Form from "../common/form";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
class MovieForm extends Form {
  state = {
    data: {
      title: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate")
  };
  handleSubmit = (e) => {
    e.preventDefault();  
    const formData = {
      title: this.state.data.title,
      numberInStock: this.state.data.numberInStock,
      dailyRentalRate: this.state.data.dailyRentalRate
  };
  saveMovie(formData);
  this.setState({data:formData, submission:true})
  console.log('formData', formData)
  //this.props.history.push("/movies");
    
  }
 
   
render() {
    return (
      <div>
        {this.state.submission &&  <Navigate to="/movies" replace={true} />}
        <div className="container">
          <h1>Movie Form</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("title", "Title")}
            {this.renderInput("numberInStock", "Number in Stock", "number")}
            {this.renderInput("dailyRentalRate", "Rate")}
            {this.renderButton("Save")}
          </form>
          </div>
      </div>
    );
  }
}
 
export default MovieForm;