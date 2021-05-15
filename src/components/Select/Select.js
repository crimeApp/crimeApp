import { React } from 'react';
import './Select.css';

const Select = ({ label, options, value, handleChange, error, size, spacing  }) => {
    return (
        <div className={`select-container ${size}`}>
            <label id="label" className={`select-label ${spacing}`}>
                {label}
            </label>
            <select 
                labelId="label" 
                id="select"
                value={value} 
                className={`select-content ${error? 'error' : ''}`}
                onChange={handleChange}>
                
                {options.map((option) =>
                        <option 
                            className='select-option'
                            key={option}
                            value={option}>
                            {option}
                        </option>
                )}

            </select>
        </div>
    )
}

export default Select;