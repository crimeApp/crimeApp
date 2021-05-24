import React from "react";
import traslate from "../../../assets/traslate/es.json";
import { Grid, Button } from "@material-ui/core";
import "../Form.css";

import { Formik, Form, Field } from "formik";

import * as Yup from "yup";

const TheftInfovalidation = Yup.object({
  type: Yup.string()
    .transform((e) => e.toLowerCase())
    .oneOf([
      "robo",
      "asesinato",
      "abuso sexual",
      "secuestro",
      "asalto",
      "hurto",
    ])
    .required('Completar la casilla'),
  hour: Yup.string()
    .transform((e) => e.toLowerCase())
    .oneOf(["mañana", "mediodia", "tarde", "noche"])
    .required('Completar la casilla'),
  date: Yup.date()
  .min(new Date("01/01/2010"))
  .max(new Date())
  .required('Ingresar una fecha valida')
});

const typeoptions = [
  {
    label: "secuestro",
    value: "secuestro",
  },
  {
    label: "Abuso sexual",
    value: "abuso sexual",
  },
  {
    label: "Asesinato",
    value: "asesinato",
  },
  {
    label: "Robo",
    value: "robo",
  },
  {
    label: "Hurto",
    value: "hurto",
  },
  {
    label: "Asalto",
    value: "asalto",
  },
];

const houroptions = [
  {
    label: "Mañana",
    value: "mañana",
  },
  {
    label: "Mediodia",
    value: "mediodia",
  },
  {
    label: "tarde",
    value: "tarde",
  },
  {
    label: "noche",
    value: "noche",
  },
];

export default function TheftInfo({ formData, handleNext }) {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Formik
        initialValues={{
          type: "",
          hour: "",
          date: "",
        }}
        validationSchema={TheftInfovalidation}
        onSubmit={(values) => {
          formData = {
            type: values.type,
            hour: values.hour,
            date: values.date,
          };
          console.log(formData);
          handleNext();
        }}
      >
        {({ errors, touched }) => (
          <Form className="form-content">
            <Grid item xs={10} className="input-container p-top-1">
              <label className={"input-label"}>
                {traslate.FORM.THEFTINFO.THEFT}
              </label>
              <Field name="type" as="select" className={`input-content ${errors.type ? "error" : ""}`}>
                <option value={typeoptions[0].value}>
                  {typeoptions[0].label}
                </option>
                <option value={typeoptions[1].value}>
                  {typeoptions[1].label}
                </option>
                <option value={typeoptions[2].value}>
                  {typeoptions[2].label}
                </option>
                <option value={typeoptions[3].value}>
                  {typeoptions[3].label}
                </option>
                <option value={typeoptions[4].value}>
                  {typeoptions[4].label}
                </option>
                <option value={typeoptions[5].value}>
                  {typeoptions[5].label}
                </option>
              </Field>
              {errors.type && touched.type ? <p className={'error-message'}>{errors.type}</p> : null}
            </Grid>

            <Grid item xs={10} className="input-container m-top-2">
              <label className={"input-label"}>
                {traslate.FORM.THEFTINFO.TIMEFRACTION}
              </label>
              <Field name="hour" as="select"className={`input-content ${errors.hour ? "error" : ""}`}>
                <option value={houroptions[0].value}>
                  {houroptions[0].label}
                </option>
                <option value={houroptions[1].value}>
                  {houroptions[1].label}
                </option>
                <option value={houroptions[2].value}>
                  {houroptions[2].label}
                </option>
                <option value={houroptions[3].value}>
                  {houroptions[3].label}
                </option>
              </Field>

              {errors.hour && touched.hour ? <p className={'error-message'}>{errors.hour}</p> : null}
            </Grid>

            <Grid item xs={10} className="input-container m-top-2">
              <label className={"input-label"}>
                {traslate.FORM.THEFTINFO.DATE}
              </label>
              <Field name="date" type="date" className={`input-content ${errors.date ? "error" : ""}`} />
              {errors.date && touched.date ? <p className={'error-message'}>{errors.date}</p> : null}
            </Grid>

            <Button 
              variant="contained" 
              color="primary" 
              type="submit"
              className={'m-top-2'}>
                {traslate["COMMON"]["NEXT"]}
              </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}
