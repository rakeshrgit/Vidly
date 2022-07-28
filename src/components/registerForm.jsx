import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form  from '../common/form'
class RegisterForm extends Form {
    state = { 
        data:{
            username:"",
            password:"",
            name:""
        },
        errors:{

        }
     }
     schema = {
        username:Joi.string().required().label('Username'),
        password:Joi.string().required().label('Password'),
        name:Joi.string().required().label('Name')
     }
     
    dosubmit = () => {
        console.log('Submitted');
    }
    render() { 
        return (
            <div className="container">
                <h2>Register</h2>    
                <form onSubmit={this.handleSubmit}>
                {this.renderInput('username', 'Username', 'text')}
                {this.renderInput('password', 'Password', 'password')}
                {this.renderInput('name', 'Name')}
                {this.renderButton('Login')}    
                </form>
            </div>
        );
    }
}
 
export default RegisterForm;