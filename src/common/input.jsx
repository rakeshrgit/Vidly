import React, { Component } from 'react';

const Input = ({name, label, value, error, onChange, type}) => {
    return ( 
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input 
                value={value}
                onChange = {onChange}
                type={type}
                className="form-control" 
                id={name}
                name={name}
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;