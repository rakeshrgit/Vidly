import React, { Component } from 'react';
import Joi from "joi-browser";
import Form from "../common/form";


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
  this.setState({data:formData})
    this.props.history.push("/movies");
    
  }

render() {
    return (
      <div>
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