import { React, useState } from 'react';
import './Select.css';

const Select = ({ label, placeholder, options }) => {
    
    const [selectedOption, setSelectedOption] = useState('');

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        console.log(selectedOption);
    };

    return (
        <div className='select-container'>
            <label className='select-label'>{label}</label>
            <select className='select-content select-option'>
                    <option value={placeholder}>{placeholder}</option>
                {options.map(option => (
                    <option onClick={onOptionClicked(option)} key={Math.random()}>
                        {option}
                    </option>
                ))}
            </select>
        </div >
    )
}

export default Select;