import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
    isMobile
  } from "react-device-detect";

import { Accordion, AccordionDetails, AccordionSummary, Typography, Divider, AccordionActions, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./DropCard.css";

const useStyles = makeStyles((theme) => ({
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function DropCard({ cards }) {
    const classes = useStyles();
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
                        <div className={classes.column}>
                            <Typography className={classes.heading}>{card.title}</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>{card.date}</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>{card.info}</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>{card.info}</Typography>
                        </div>
                    </AccordionDetails>
                    <Divider />
                    <AccordionActions>
                        <Button size="small">Cancel</Button>
                        <Button size="small" color="primary">
                            Save
                        </Button>
                    </AccordionActions>
                </Accordion>

            ))}
        </>
    );
}
