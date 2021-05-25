import React, { useState } from "react";
import traslate from "../../assets/traslate/es.json";
import axios from "axios";
import {
  Grid,
  Button,
  Divider,
  Accordion,
  List,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { ExpandMore, Edit } from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";
import "./Form.css";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

/*
const formData = {
    type: "",
    time: "",
    date: "",
    place_description: "",
    accompaniment: "",
    stolen_cash: "",
    stolen_items: "",
    victim_height: "",
    victim_skin: "",
    victim_clothing: "",
    victim_pyshical: "",
    victim_name: "",
    victim_dni: "",
    victim_gender: "",
    victim_age: "",
    thief_profile: "",
    thief_age: "",
    thief_height: "",
    thief_skin: "",
    thief_clothing: "",
    thief_pyshical: ""
  }; */

const Review = ({ formData, handleBack, handleNext, returnToStep }) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      let response = await axios.post(
        "http://demo0725191.mockable.io/post_data",
        { posted_data: "example" }
      );
      console.log("Returned data:", response);
      setTimeout(setLoading(false), 3000);
    } catch (e) {
      console.log(`Axios request failed: ${e}`);

      setTimeout(() => {
        setError(true);
        setLoading(false);
      }, 3000);
    }
  }

  const loadingMessage = <Alert>{traslate["COMMON"]["LOADING"]}</Alert>

  const errorMessage = (
    <Alert severity="error">{traslate["COMMON"]["ERROR"]}</Alert>
  );

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className="review-content"
    >
      <Grid item>
        <Divider/>
      </Grid>
      <Grid item className="review-content">
        <Accordion
          className="review-item"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <ListItem button>
              <h3>{traslate["FORM"]["THEFTINFO"]["THIEFINFO"]}</h3>
            </ListItem>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              {generate(
                <ListItem button>
                  <ListItemText primary="Single-line item" />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit" onClick={returnToStep}>
                      <Edit />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="review-item"
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <ListItem button>
              <h3>{traslate["FORM"]["PERSONALINFO"]["PERSONALINFO"]}</h3>
            </ListItem>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              {generate(
                <ListItem button>
                  <ListItemText primary="Single-line item" />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <Edit />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          className="review-item"
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <ListItem button>
              <h3>{traslate["FORM"]["THEFTDETAILS"]["THIEFINFO"]}</h3>
            </ListItem>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              {generate(
                <ListItem button>
                  <ListItemText primary="Single-line item" />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <Edit />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
            </List>
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item className="m-top-2">
        {isLoading ? loadingMessage : null}
        {error ? errorMessage : null}
      </Grid>

      <Grid item className="m-top-1">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleBack}>
              {traslate["COMMON"]["BACK"]}
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmit}
            >
              {traslate["COMMON"]["NEXT"]}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Review;
