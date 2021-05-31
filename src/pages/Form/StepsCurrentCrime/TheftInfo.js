import React, { Fragment } from "react";
import traslate from "../../../assets/traslate/es.json";
import { Grid, Button } from "@material-ui/core";
import "../Form.css";

import { Formik, Form, Field } from "formik";

import * as Yup from "yup";

const place_options = [
  {
    label: "Parque",
    value: "parque",
  },
  {
    label: "Calle",
    value: "calle",
  },
  {
    label: "Parada de colectivo",
    value: "parada de colectivo",
  },
  {
    label: "centro comercial",
    value: "centro comercial",
  },
  {
    label: "propiedad privada",
    value: "propiedad privada",
  },
  {
    label: "supermercado",
    value: "supermercado",
  },
  {
    label: "Estacionamiento",
    value: "estacionamiento",
  },
  {
    label: "Otro",
    value: "otro",
  },
];

const company_options = [
  {
    label: "Solo/a, gente alrededor",
    value: "companianogentesi",
  },
  {
    label: "Acompañado, gente alrededor",
    value: "acompaniado y con gente al rededor",
  },
  {
    label: "Solo/a, sin gente",
    value: "sin compania y sin gente alrededor",
  },
  {
    label: "Acompañado, sin gente alrededor",
    value: "acompaniado pero sin gente alrededor",
  },
];

const type_options = [
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

const hour_options = [
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
    .required("Completar la casilla"),
  hour: Yup.string()
    .transform((e) => e.toLowerCase())
    .oneOf(["mañana", "mediodia", "tarde", "noche"])
    .required("Completar la casilla"),
  date: Yup.date()
    .min(new Date("01/01/2010"))
    .max(new Date())
    .required("Ingresar una fecha valida"),
  place_description: Yup.mixed()
    .transform((e) => e.toLowerCase())
    .oneOf([
      "otro",
      "en el estacionamiento",
      "parada de colectivo",
      "supermercado",
      "propiedad privada",
      "calle",
      "centro comercial",
      "parque",
    ])
    .required("Completar la casilla"),
  accompaniment: Yup.mixed()
    .transform((e) => e.toLowerCase())
    .oneOf([
      "sin compania pero con gente alrededor",
      "acompaniado y con gente al rededor",
      "sin compania y sin gente alrededor",
      "acompaniado pero sin gente alrededor",
    ])
    .required("Completar la casilla"),
});

const TheftInfo = ({ formData, handleNext }) => {
  return (
    <Fragment>
      <Formik
        initialValues={{
          type: "",
          hour: "",
          date: "",
          place_description: "",
          accompaniment: "",
        }}
        validationSchema={TheftInfovalidation}
        onSubmit={(values) => {
          formData = {
            type: values.type,
            hour: values.hour,
            date: values.date,
            place_description: values.place_description,
            accompaniment: values.accompaniment,
          };
          console.log(formData);
          handleNext();
        }}
      >
        {({ errors, touched }) => (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className='form-content'
          >
            <h4 className="form-subtitle">
              {traslate["FORM"]["THEFTINFO"]["THIEFINFO"]}
            </h4>
            <Form className="m-left-3 m-right-3">
              <Grid item xs={12} className="m-left-3">
                <label className={"input-label"}>
                  {traslate.FORM.THEFTINFO.THEFT}
                </label>
              </Grid>
              <Grid item xs={12} className="m-bottom-3 m-left-3">
                <Field
                  name="type"
                  as="select"
                  className={`input-content ${errors.type ? "error" : ""}`}
                >
                  {type_options.map((type) => (
                    <option value={type.value}>{type.label}</option>
                  ))}
                </Field>
                {errors.type && touched.type ? (
                  <p className="error-message m-bottom-1 m-top-1">
                    {errors.type}
                  </p>
                ) : null}
              </Grid>
              <Grid item xs={12} className="m-left-3">
                <label className={"input-label"}>
                  {traslate.FORM.THEFTINFO.TIMEFRACTION}
                </label>
              </Grid>
              <Grid item xs={12} className="m-bottom-3 m-left-3">
                <Field
                  name="hour"
                  as="select"
                  className={`input-content ${errors.hour ? "error" : ""}`}
                >
                  {hour_options.map((hour) => (
                    <option value={hour.value}>{hour.label}</option>
                  ))}
                </Field>

                {errors.hour && touched.hour ? (
                  <p className="error-message m-bottom-1 m-top-1">
                    {errors.hour}
                  </p>
                ) : null}
              </Grid>

              <Grid item xs={12} className="m-left-3">
                <label className={"input-label"}>
                  {traslate.FORM.THEFTINFO.DATE}
                </label>
              </Grid>
              <Grid item xs={12} className="m-bottom-3 m-left-3">
                <Field
                  name="date"
                  type="date"
                  className={`input-content ${errors.date ? "error" : ""}`}
                />
                {errors.date && touched.date ? (
                  <p className="error-message m-bottom-1 m-top-1">
                    {errors.date}
                  </p>
                ) : null}
              </Grid>

              <Grid item xs={12} className="m-left-3">
                <label className={"input-label"}>
                  {traslate.FORM.THEFTINFO["COMPANY"]}
                </label>
              </Grid>

              <Grid item xs={12} className="m-bottom-3 m-left-3">
                <Field
                  name="accompaniment"
                  as="select"
                  className={`input-content ${errors.accompaniment ? "error" : ""
                    }`}
                >
                  {company_options.map((company) => (
                    <option value={company[1].value}>{company[1].label}</option>
                  ))}
                </Field>
                {errors.accompaniment && touched.accompaniment ? (
                  <p className="error-message m-bottom-1 m-top-1">
                    {errors.accompaniment}
                  </p>
                ) : null}
              </Grid>

              <Grid item xs={12} className="m-left-3">
                <label className="input-label">
                  {traslate.FORM.THEFTINFO["PLACE-DESCRIPTION"]}
                </label>
              </Grid>
              <Grid item xs={12} className="m-bottom-3 m-left-3">
                <Field
                  name="place_description"
                  as="select"
                  className={`input-content ${errors.accompaniment ? "error" : ""
                    }`}
                >
                  {place_options.map((place) => (
                    <option value={place.value}>{place.label}</option>
                  ))}
                </Field>

                {errors.place_description && touched.place_description ? (
                  <p className="error-message m-bottom-1 m-top-1">
                    {errors.place_description}
                  </p>
                ) : null}
              </Grid>

              <Grid item xs={10} className="m-top-1">
                  <div className='form-controls m-right-3 m-left-3'>  
                    <Button 
                      variant="contained" 
                      color="primary" 
                      type="submit" 
                      className='m-left-3'>
                      {traslate["COMMON"]["NEXT"]}
                    </Button>
                  </div>
              </Grid>
            </Form>
          </Grid>
        )}
      </Formik>
    </Fragment>
  );
}

export default TheftInfo;
