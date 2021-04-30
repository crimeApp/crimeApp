import { React, useState, useEffect } from 'react';
import traslate from "../assets/traslate/es.json";
import CustomButton from "../components/Button";
/* import CostumSelect from "../components/Select/Select";

const options = [
    {id: 1, text: `${traslate["SELECT"]["PLACEHOLDER"]}`},
    {id: 2, text: 'Mango'},
    {id: 3, text: "Apples"},
    {id: 4, text: "Oranges"}
  ];



    const [selectedOption, setSelectedOption] = useState("");
    
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        console.log("Value of Selected Option is: ", selectedOption);
    }, [selectedOption]);  */

    //select component

    /* <CostumSelect 
            label={'Conoce al atacante?'} 
            options={options} 
            value={selectedOption} 
            handleChange={handleChange} />

        <p>Opcion elegida: {selectedOption}</p> */
export default function Contact (){
    return(
        <div>
            <CustomButton 
                color="#5063BB"
                textColor="#F6FAFD" 
                width="450"
                size="m" 
                shape="round">Hola</CustomButton>

        </div>
    )
}