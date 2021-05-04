import React from 'react';

import Grid from '@material-ui/core/Grid';
import DropCard from '../components/DropCard/DropCard';

const cards = [
    { id: 1, date: "12/12/12", title: "This is a title", info: "This is info"},

    { id: 2, date: "12/12/12", title: "This is a title", info: "This is info"},
]
export default function Contact (){

    return(
        <Grid container
            direction="column"
            justify="center"
            spacing={3} >

            {cards.map((card) => (
                <Grid item > <DropCard key={card.id} card={card}/> </Grid>
            ))}

        </Grid>
    )
}