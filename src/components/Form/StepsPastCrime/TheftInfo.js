import React, { useState } from "react";
import traslate from "../../../assets/traslate/es.json";
import Input from "../../../components/Input/input";
import Select from "../../Select/Select";
import { Grid, Button } from "@material-ui/core";


import "../../Form/Form.css";

export default function TheftInfo({ setForm, formData, navigation, isMobile }) {
  const { typeoftheft, timefraction, date } = formData;

  const { previous, next } = navigation;

  const [errors, setErrors] = useState({ error: false, errorMessage: "" });

  const validateTheftInfo = () => {
    if (timefraction !== "" && typeoftheft !== "" && date !== "") {
      next();
    } else {
      setErrors({ error: true, errorMessage: "Complete las casillas" });
    }
  };

  const handleNext = (event) => {
    validateTheftInfo();
  };

  const theftoptions = ["Robo", "Hurto", "Asalto"];
  const timefractions = ["Maniana", "Tarde", "Noche"];

  return (
    <Grid container direction="column" justify="center" alignItems="center" spacing={`${isMobile? `1` : `3`}`}>
      <Grid item>
        <Select
          size={isMobile? "xs" : "m"}
          spacing={isMobile? "xs" : "s"}
          error={errors.error}
          label={traslate.FORM.THEFTINFO.THEFT}
          value={typeoftheft}
          handleChange={setForm}
          options={theftoptions}
        />
      </Grid>

      <Grid item>
        <Select
          size={isMobile? "xs" : "m"}
          spacing={isMobile? "xs" : "s"}
          error={errors.error}
          label={traslate.FORM.THEFTINFO.TIMEFRACTION}
          name="timefraction"
          value={timefraction}
          onChange={setForm}
          options={timefractions}
        />
      </Grid>

      <Grid item>
        <Input
          size={isMobile? "xs" : "m"}
          spacing={"s"}
          error={errors.error}
          type={"date"}
          label={traslate.FORM.THEFTINFO.DATE}
          name="date"
          value={date}
          onChange={setForm}
        />
      </Grid>

      <Grid item>
        {errors.error && <p className="error-message">{errors.errorMessage}</p>}
      </Grid>

      <Grid item className="form-controls">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <Button
              disabled
              variant="contained"
              color="primary"
              onClick={previous}
            >
              {traslate["COMMON"]["BACK"]}
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              type="submit"
            >
              {traslate["COMMON"]["NEXT"]}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
