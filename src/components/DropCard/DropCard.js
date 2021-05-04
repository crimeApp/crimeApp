import React, { useState } from 'react';
import traslate from "../../assets/traslate/es.json";
import {
    isMobile
  } from "react-device-detect";

import { Accordion, AccordionDetails, AccordionSummary, Divider, AccordionActions, Button, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./DropCard.css";

export default function DropCard({ card }) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Grid container>
            <Accordion expanded={expanded === `panel${card.id}`}
                    onChange={handleChange(`panel${card.id}`)}
                    className={isMobile? '' : 'l'}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon color="primary"/>}
                        aria-controls={`panel${card.id}bh-content`}
                        id={`panel${card.id}bh-header`}
                    >
                        <div className="dropcard-column">
                            <h3 className={`dropcard-header${isMobile? '-mobile' : ''}`}>{card.title}</h3>
                        </div>
                        <div className="dropcard-column">
                            <h4 className={`dropcard-date${isMobile? '-mobile' : ''}`}>{card.date}</h4>
                        </div>
                    </AccordionSummary>

                    <AccordionDetails className={`dropcard-details${isMobile? '-mobile' : ''}`}>
                        <div className="dropcard-column">
                            <h5>{card.info}</h5>
                        </div>
                        <div className="dropcard-column">
                            <h5>{card.info}</h5>
                        </div>
                    </AccordionDetails>
                    <Divider />
                    <AccordionActions>
                        <Button size="small" variant="contained">
                            {traslate["COMMON"]["CANCEL"]}
                        </Button>

                        <Button size="small" color="primary" variant="contained">
                            {traslate["COMMON"]["CONFIRM"]}
                        </Button>
                    </AccordionActions>
                </Accordion>
        </Grid>
    );
}
