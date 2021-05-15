import { React } from 'react';
import { Grid } from '@material-ui/core';
import './Select.css';

const Select = ({ label, options, value, handleChange }) => {
    return (
        <Grid className='select-container'>
            <label id="label" className='select-label'>
                {label}
            </label>
            <select 
                labelId="label" 
                id="select"
                value={value} 
                className='select-content select-option m' 
                onChange={handleChange}>
                
                {options.map((option) =>
                        <option 
                            key={option.text}
                            value={option.text}>
                            {option.text}
                        </option>
                )}

            </select>
        </Grid>
    )
}

export default Select;