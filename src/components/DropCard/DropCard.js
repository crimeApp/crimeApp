import React, { useState } from 'react';
import traslate from "../../assets/traslate/es.json";
import {
    isMobile
  } from "react-device-detect";

import { Accordion, AccordionDetails, AccordionSummary, Typography, Divider, AccordionActions, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./DropCard.css";

export default function DropCard({ cards }) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            {cards.map((card) => (
                <Accordion expanded={expanded === `panel${card.id}`}
                    onChange={handleChange(`panel${card.id}`)}
                    className={isMobile? '' : 'l'}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${card.id}bh-content`}
                        id={`panel${card.id}bh-header`}
                    >
                        <div className="card-column">
                            <h1 className={`card-heading${isMobile? '-mobile' : ''}`}>{card.title}</h1>
                        </div>
                        <div className="card-column">
                            <h2 className={`card-date${isMobile? '-mobile' : ''}`}>{card.date}</h2>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className={`card-details${isMobile? '-mobile' : ''}`}>
                        <div className="card-column">
                            <h3>{card.info}</h3>
                        </div>
                        <div className="card-column">
                            <h3>{card.info}</h3>
                        </div>
                    </AccordionDetails>
                    <Divider />
                    <AccordionActions>
                        <Button size="small">
                            {traslate["BUTTON"]["CANCEL"]}
                        </Button>

                        <Button size="small" color="primary">
                            {traslate["BUTTON"]["CONFIRM"]}
                        </Button>
                    </AccordionActions>
                </Accordion>

            ))}
        </>
    );
}
