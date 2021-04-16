import React from 'react';
import traslate from "../assets/traslate/es.json";
import CostumSelect from "../components/Select/Select";

const options = ["Mangoes", "Apples", "Oranges"];

export default function Contact (){
    return(
        <div>
            <CostumSelect label={'Conoce al atacante?'} options={options} placeholder={traslate["SELECT"]["PLACEHOLDER"]}/>
        </div>
    )
}