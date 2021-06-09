import React, { Fragment } from "react";
import traslate from "../../../assets/traslate/es.json";
import { Grid, Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "../Form.css";

const gender_options = [
  { label: "Hombre", value: "hombre" },
  { label: "Mujer", value: "mujer" },
  { label: "Prefiero no decir", value: "indefinido" },
];

const PersonalInfovalidation = Yup.object({
  victim_name: Yup.string()
    .transform((e) => e.toLowerCase())
    .optional(),
  victim_dni: Yup.number()
    .min(100000)
    .max(99999999)
    .required("Completar la casilla"),
  victim_gender: Yup.string()
    .transform((e) => e.toLowerCase())
    .oneOf(["hombre", "mujer", "indefinido"])
    .required("Elija una opcion"),
  victim_age: Yup.number().max(100).min(12).required("Completar la casilla"),
});

export default function PersonalDetails({ formData, handleNext, handleBack }) {
  const { victim_name, victim_dni,
        victim_gender,
        victim_age } = formData;
  return (
    <Fragment>
      <Formik
        initialValues={{
          victim_name: victim_name,
          victim_dni: victim_dni,
          victim_gender: victim_gender,
          victim_age: victim_age,
        }}
        validationSchema={PersonalInfovalidation}
        onSubmit={(values) => {
          formData.victim_name = values.victim_name;
          formData.victim_dni = values.victim_dni;
          formData.victim_gender =  values.victim_gender;
          formData.victim_age = values.victim_age;
        
          handleNext();
        }}
      >
        {({ errors, touched }) => (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className="form-content"
          >
            <h4 className="form-subtitle">
              {traslate["FORM"]["PERSONALINFO"]["PERSONALINFO"]}
            </h4>

            <Form className="m-left-3 m-right-3">
              {/* Victim name */}

              <Grid item xs={12} className="m-bottom-1 m-left-3">
                <label className={"input-label"}>
                  {traslate.FORM["PERSONALINFO"]["NAME"]}
                </label>
              </Grid>
              <Grid item xs={12} className="m-bottom-3 m-left-3">
                <Field
                  name="victim_name"
                  type="string"
                  placeholder={
                    traslate.FORM["PERSONALINFO"]["NAME-PLACEHOLDER"]
                  }
                  className={`input-content ${errors.victim_name ? "error" : ""
                    }`}
                />
                {errors.victim_name && touched.victim_name ? (
                  <p className={"error-message"}>{errors.victim_name}</p>
                ) : null}
              </Grid>

              {/* Victim DNI */}

              <Grid item xs={12} className="m-bottom-1 m-left-3">
                <label className={"input-label"}>
                  {traslate.FORM["PERSONALINFO"]["DNI"]}
                </label>
              </Grid>
              <Grid item xs={12} className="m-bottom-3 m-left-3">
                <Field
                  name="victim_dni"
                  type="number"
                  placeholder={traslate.FORM["PERSONALINFO"]["DNI-PLACEHOLDER"]}
                  className={`input-content ${errors.victim_dni ? "error" : ""
                    }`}
                />
                {errors.victim_dni && touched.victim_dni ? (
                  <p className={"error-message"}>{errors.victim_dni}</p>
                ) : null}
              </Grid>

              {/* Victim gender */}

              <Grid item xs={12} className="m-bottom-1 m-left-3">
                <label className={"input-label"}>
                  {traslate.FORM["PERSONALINFO"]["GENDER"]}
                </label>
              </Grid>
              <Grid item xs={12} className="m-bottom-3 m-left-3">
                <Field
                  name="victim_gender"
                  type="string"
                  as="select"
                  className={`input-content ${errors.victim_gender ? "error" : ""
                    }`}
                >
                  {gender_options.map((gender) => (
                    <option key={gender.value} value={gender.value}>{gender.label}</option>
                  ))}
                 
                </Field>
                {errors.victim_gender && touched.victim_gender ? (
                  <p className={"error-message"}>{errors.victim_gender}</p>
                ) : null}
              </Grid>

              {/* Victim age */}

              <Grid item xs={12} className="m-bottom-1 m-left-3">
                <label className={"input-label"}>
                  {traslate.FORM.PERSONALINFO["AGE"]}
                </label>
              </Grid>
              <Grid item xs={12} className="m-bottom-3 m-left-3">
                <Field
                  name="victim_age"
                  type="string"
                  placeholder={traslate.FORM["PERSONALINFO"]["AGE-PLACEHOLDER"]}
                  className={`input-content ${errors.victim_age ? "error" : ""
                    }`}
                />
                {errors.victim_age && touched.victim_age ? (
                  <p className={"error-message"}>{errors.victim_age}</p>
                ) : null}
              </Grid>

              <Grid item xs={12} className="m-top-1">
                <div className='form-controls m-right-3 m-left-3'>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleBack}
                    className='m-right-3 m-left-3'
                  >
                    {traslate["COMMON"]["BACK"]}
                  </Button>

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
