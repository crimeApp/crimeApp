import React from "react";
import traslate from "../../../assets/traslate/es.json";
import { Grid, Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "../Form.css";

const clothing_options = [
  `${traslate["CLOTHING"]["FORMAL"]}`,
  `${traslate["CLOTHING"]["CASUAL"]}`,
  `${traslate["CLOTHING"]["SPORTY"]}`,
  `${traslate["CLOTHING"]["WORK"]}`,
  `${traslate["GENDER"]["SEMIFORMAL"]}`,
  `${traslate["CLOTHING"]["SCHOLAR"]}`,
  `${traslate["CLOTHING"]["TIDY"]}`,
  `${traslate["CLOTHING"]["UNTIDY"]}`
];

const height_options = [
  `${traslate["HEIGHT"]["HIGH"]}`,
  `${traslate["HEIGHT"]["MEDIUM"]}`,
  `${traslate["HEIGHT"]["SMALL"]}`
];

const physical_options = [
  `${traslate["PHYSICAL_BUILD"]["THIN"]}`,
  `${traslate["PHYSICAL_BUILD"]["NORMAL"]}`,
  `${traslate["PHYSICAL_BUILD"]["STRONG"]}`,
  `${traslate["PHYSICAL_BUILD"]["OBESE"]}`,
  `${traslate["PHYSICAL_BUILD"]["ATHELTIC"]}`];

const gender_options = [`${traslate["GENDER"]["MAN"]}`, `${traslate["GENDER"]["WOMAN"]}`];

const PersonalInfovalidation = Yup.object({
  
  victim_height: Yup.string()
    .transform((e) => e.toLowerCase())
    .oneOf(height_options),
  victim_skin: Yup.string()
    .transform((e) => e.toLowerCase())
    .oneOf(gender_options)
    .optional(),
  victim_clothing: Yup.string()
    .transform((e) => e.toLowerCase())
    .oneOf(clothing_options)
    .optional(),
  victim_physical: Yup.string()
    .transform((e) => e.toLowerCase())
    .oneOf(physical_options)
    .optional(),
});

export default function PersonalDetails2({ formData, handleNext, handleBack }) {
  return (
    <Grid container direction="column" justify="center" alignItems="center" className='form-content'>
      <Grid item xs={10} className='form-subtitle'>
        <h4>{traslate['FORM']['PERSONALINFO']['VICTIMINFO']}</h4>
      </Grid>
        <Formik
          initialValues={{
            victim_height: "",
            victim_skin: "",
            victim_clothing: "",
            victim_pyshical: "",
          }}
          validationSchema={PersonalInfovalidation}
          onSubmit={(values) => {
            formData = formData = {
              victim_height: values.victim_height,
              victim_skin: values.victim_skin,
              victim_clothing: values.victim_clothing,
              victim_pyshical: values.victim_pyshical,
            };
            console.log(formData);
            handleNext();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {/* Victim height */}

              <Grid item xs={12} className="input-container m-top-2">
                <label className={"input-label"}>
                  {traslate.FORM.PERSONALINFO["HEIGHT"]}
                </label>
                <Field
                  name="victim_height"
                  type="string"
                  placeholder={
                    traslate.FORM["PERSONALINFO"]["HEIGHT-PLACEHOLDER"]
                  }
                  className={`input-content ${errors.victim_height ? "error" : ""
                    }`}
                />
                {errors.victim_height && touched.victim_height ? (
                  <p className={"error-message"}>{errors.victim_height}</p>
                ) : null}
              </Grid>

              {/* Victim skin */}
              <Grid item xs={12} className="input-container m-top-2">
                <label className={"input-label"}>
                  {traslate.FORM.PERSONALINFO["SKIN"]}
                </label>
                <Field
                  name="victim_skin"
                  type="string"
                  as="select"
                  className={`input-content ${errors.victim_skin ? "error" : ""}`}
                >
                  <option value={traslate["GENDER"]["WOMAN"]}>
                    {traslate["GENDER"]["WOMAN"]}
                  </option>
                  <option value={traslate["GENDER"]["MAN"]}>
                    {traslate["GENDER"]["MAN"]}
                  </option>
                </Field>
                {errors.victim_skin && touched.victim_skin ? (
                  <p className={"error-message"}>{errors.victim_skin}</p>
                ) : null}
              </Grid>

              {/* Victim clothing */}

              <Grid item xs={12} className="input-container m-top-2">
                <label className={"input-label"}>
                  {traslate.FORM.PERSONALINFO["CLOTHING"]}
                </label>
                <Field
                  name="victim_clothing"
                  type="string"
                  as="select"
                  className={`input-content ${errors.victim_clothing ? "error" : ""
                    }`}
                >
                  <option value={traslate["GENDER"]["WOMAN"]}>
                    {traslate["GENDER"]["WOMAN"]}
                  </option>
                  <option value={traslate["GENDER"]["MAN"]}>
                    {traslate["GENDER"]["MAN"]}
                  </option>
                </Field>

                {errors.victim_clothing && touched.victim_clothing ? (
                  <p className={"error-message"}>{errors.victim_clothing}</p>
                ) : null}
              </Grid>

              {/* Victim pyshical */}

              <Grid item xs={12} className="input-container m-top-2">
                <label className={"input-label"}>
                  {traslate.FORM.PERSONALINFO["PHYSICAL"]}
                </label>
                <Field
                  name="victim_pyshical"
                  type="string"
                  as="select"
                  className={`input-content ${errors.victim_pyshical ? "error" : ""
                    }`}
                >
                  <option value={traslate["GENDER"]["WOMAN"]}>
                    {traslate["GENDER"]["WOMAN"]}
                  </option>
                  <option value={traslate["GENDER"]["MAN"]}>
                    {traslate["GENDER"]["MAN"]}
                  </option>
                </Field>
                {errors.victim_pyshical && touched.victim_pyshical ? (
                  <p className={"error-message"}>{errors.victim_pyshical}</p>
                ) : null}
              </Grid>

              <Grid
                container
                className={"m-top-2"}
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}
              >
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleBack}
                  >
                    {traslate["COMMON"]["BACK"]}
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="contained" color="primary" type="submit">
                    {traslate["COMMON"]["NEXT"]}
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
    </Grid>
  );
}
