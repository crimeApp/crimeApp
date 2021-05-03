import { React, useState, useEffect } from 'react';
import traslate from "../assets/traslate/es.json";
import CostumSelect from "../components/Select/Select";
import LayoutBasic from '../layouts/LayoutBasic';

const options = [
    {id: 1, text: `${traslate["SELECT"]["PLACEHOLDER"]}`},
    {id: 2, text: 'Mango'},
    {id: 3, text: "Apples"},
    {id: 4, text: "Oranges"}
  ];

export default function Contact (){

    const [selectedOption, setSelectedOption] = useState("");
    
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        console.log("Value of Selected Option is: ", selectedOption);
    }, [selectedOption]); 

    return(
        <>
            <CostumSelect 
                label={'Conoce al atacante?'} 
                options={options} 
                value={selectedOption} 
                handleChange={handleChange} />

            <p>Opcion elegida: {selectedOption}</p>
        </>
    )
}