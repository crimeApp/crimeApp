import { React } from 'react';
import './Select.css';

const Select = ({ label, options, value, handleChange }) => {
    return (
        <div className='select-container'>
            <label id="label" className='select-label'>
                {label}
            </label>
            <select 
                labelId="label" 
                id="select"
                value={value} 
                className='select-content select-option' 
                onChange={handleChange}>
                
                {options.map((option) =>
                        <option 
                            key={option.text}
                            value={option.text}>
                            {option.text}
                        </option>
                )}

            </select>
        </div >
    )
}

export default Select;