import React, { useEffect, useState } from "react";
import traslate from "../../../assets/traslate/es.json";
import { Select, Input } from "../../../components";
import { Grid, Button } from "@material-ui/core";
import "../Form.css";
import Validator from "../../../utils/validator";
import yup from "../../../utils/yup";

const schemaRequest = yup.object().shape({
  type: yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf(["robo", "asesinato", "abuso sexual", "secuestro"])
      .required(),
  hour: yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf(["mañana", "mediodia", "tarde", "noche"])
      .required(),
  date: yup
      .date()
      .min(new Date('01/01/2010'))
      .max(new Date())
  })

export default function TheftInfo({ form, onChange }) {

  const [errors, setErrors] = useState({});

  const onSubmmit = async () => {

    const resp = await Validator(form, schemaRequest);

    if(resp.err) {
      setErrors(resp.data)
      return
    }

  }

  useEffect( () => console.log(errors), [errors])

  const theftoptions = ["Robo", "Hurto", "Asalto"];
  const timefractions = ["Maniana", "Tarde", "Noche"];

  return (
    <Grid container justify="center" alignItems="center">
      <Select
        xs={12}
        error={errors?.type?.err}
        errorMessage={errors?.type?.msg}
        value={form.type}
        label={traslate.FORM.THEFTINFO.THEFT}
        onChange={(event, value) => onChange("type", value)}
        options={theftoptions}
      />
      <Select
        xs={12}
        error={errors?.hour?.err}
        errorMessage={errors?.hour?.msg}
        label={traslate.FORM.THEFTINFO.TIMEFRACTION}
        value={form.hour}
        onChange={(event, value) => onChange("hour", value)}
        options={timefractions}
      />
      <Input
        xs={12}
        error={errors?.date?.err}
        errorMessage={errors?.date?.msg}
        type="date"
        value={form.date}
        label={traslate.FORM.THEFTINFO.DATE}
        name="date"
        onChange={(event) => onChange(event.target.name, event.target.value)}
      />

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
            >
              {traslate["COMMON"]["BACK"]}
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={onSubmmit} 
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
