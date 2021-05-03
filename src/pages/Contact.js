import { React, useState, useEffect } from 'react';
import traslate from "../assets/traslate/es.json";
import CostumSelect from "../components/Select/Select";
import LayoutBasic from '../layouts/LayoutBasic';
import DropCard from "../components/DropCard/DropCard";

 const data = [
    { id: 1, title: "John Doe", date: "12/12/12", info: "Random text" },
    { id: 2, title: "John Doe", date: "12/12/12", info: "Random text" }
  ];

export default function Contact (){

    return(
        <>
            <CostumSelect 
                label={'Conoce al atacante?'} 
                options={options} 
                value={selectedOption} 
                handleChange={handleChange} />

            <p>Opcion elegida: {selectedOption}</p>
            <DropCard cards={data} />
        </>
    )
}