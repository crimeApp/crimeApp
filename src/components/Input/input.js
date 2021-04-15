import React from 'react';
import './input.css';

const Input = ({ title, placeholder, value, name, callback }) => {

    return (
        <div className='col-md col-lg-4 container-input'>
            <div className='input-label'>
                <h5>{title}</h5>
            </div>
            <div className='col'>
                <div className='row'>
                    <input className='input-content'
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={callback}
                    />
                </div>
            </div>
        </div>
    )
}

export default Input;