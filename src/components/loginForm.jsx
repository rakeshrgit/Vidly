import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form  from '../common/form'

class LoginForm extends Form {
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
        name:Joi.string().allow('').optional().label('Name')
     }
     
    dosubmit = () => {
        console.log('Submitted');
    }
   render() { 
       
        return (
            <div className="container">
                    <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username', 'text')}
                    {this.renderInput('name', 'Name', 'text')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login')}    
                    </form>

            </div>
        );
    }
}
 
export default LoginForm;