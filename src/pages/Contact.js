import React  from 'react';
import DropCard from "../components/DropCard/DropCard";

 const data = [
    { id: 1, title: "John Doe", date: "12/12/12", info: "Random text" },
    { id: 2, title: "John Doe", date: "12/12/12", info: "Random text" }
  ];

export default function Contact (){

    return(
        <div>
            <DropCard cards={data} />
        </div>
    )
}