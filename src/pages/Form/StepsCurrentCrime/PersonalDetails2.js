import React, { Fragment } from "react";
import traslate from "../../../assets/traslate/es.json";
import { Grid, Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "../Form.css";

const clothing_validation = [
  `${traslate["CLOTHING"]["FORMAL"]}`,
  `${traslate["CLOTHING"]["CASUAL"]}`,
  `${traslate["CLOTHING"]["SPORTY"]}`,
  `${traslate["CLOTHING"]["WORK"]}`,
  `${traslate["GENDER"]["SEMIFORMAL"]}`,
  `${traslate["CLOTHING"]["SCHOLAR"]}`,
  `${traslate["CLOTHING"]["TIDY"]}`,
  `${traslate["CLOTHING"]["UNTIDY"]}`,
];

const clothing_options = [
  { label: "Formal", value: "formal" },
  { label: "Casual", value: "casual" },
  { label: "Deportivo", value: "Deportivo" },
  { label: "Trabajo", value: "Trabajo" },
  { label: "Semiinformal", value: "Semiinformal" },
  { label: "Escolar", value: "Escolar" },
  { label: "Limpio", value: "Limpio" },
  { label: "Desalineado", value: "Desalineado" },
];

const height_options = [
  { label: "Alto", value: "alto" },
  { label: "Mediano", value: "mediano" },
  { label: "Bajo", value: "bajo" },
];

const physical_options = [
  { label: "Flaco", value: "flaco" },
  { label: "Normal", value: "normal" },
  { label: "Obeso", value: "obeso" },
  { label: "Atletico", value: "Atletico" },
  { label: "Corpulento", value: "Corpulento" },
];

const physical_validation = [
  `${traslate["PHYSICAL_BUILD"]["THIN"]}`,
  `${traslate["PHYSICAL_BUILD"]["NORMAL"]}`,
  `${traslate["PHYSICAL_BUILD"]["STRONG"]}`,
  `${traslate["PHYSICAL_BUILD"]["OBESE"]}`,
  `${traslate["PHYSICAL_BUILD"]["ATHELTIC"]}`,
];

const PersonalInfovalidation = Yup.object({
  victim_height: Yup.string()
    .transform((e) => e.toLowerCase())
    .oneOf(["menor de edad", "18-25", "25-35", "35-45", "mas de 50"]),
  victim_skin: Yup.string()
    .transform((e) => e.toLowerCase())
    .optional(),
  victim_clothing: Yup.string()
    .transform((e) => e.toLowerCase())
    .oneOf(clothing_validation),
  victim_physical: Yup.string()
    .transform((e) => e.toLowerCase())
    .oneOf(physical_validation),
});

export default function PersonalDetails2({ formData, handleNext, handleBack }) {
  return (
    <Fragment>
      <h4 className="form-subtitle">
        {traslate["FORM"]["PERSONALINFO"]["PERSONALINFO"]}
      </h4>
      <Formik
        initialValues={{
          victim_height: "",
          victim_skin: "",
          victim_clothing: "",
          victim_pyshical: "",
        }}
        validationSchema={PersonalInfovalidation}
        onSubmit={(values) => {
          if (values) {
            formData = formData = {
              victim_height: values.victim_height,
              victim_skin: values.victim_skin,
              victim_clothing: values.victim_clothing,
              victim_pyshical: values.victim_pyshical,
            };
          }

          handleNext();
        }}
      >
        {({ errors, touched }) => (
          <Form className="form-content">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className="form-content"
            >
              {/* Victim height */}

              <Grid item xs={12} className="input-container m-top-2">
                <label className={"input-label"}>
                  {traslate.FORM.PERSONALINFO["HEIGHT"]}
                </label>
                <Field
                  name="victim_height"
                  type="string"
                  as="select"
                  placeholder={
                    traslate.FORM["PERSONALINFO"]["HEIGHT-PLACEHOLDER"]
                  }
                  className={`input-content ${
                    errors.victim_height ? "error" : ""
                  }`}
                >
                  {height_options.map((heightoption) => (
                    <option value={heightoption.value}>
                      {heightoption.label}
                    </option>
                  ))}
                </Field>
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
                  placeholder={
                    traslate.FORM["PERSONALINFO"]["SKIN-PLACEHOLDER"]
                  }
                  className={`input-content ${
                    errors.victim_skin ? "error" : ""
                  }`}
                >
                  <option value={height_options[0]}>{height_options[0]}</option>
                  <option value={height_options[0]}>{height_options[0]}</option>
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
                  placeholder={
                    traslate.FORM["PERSONALINFO"]["CLOTHING-PLACEHOLDER"]
                  }
                  className={`input-content ${
                    errors.victim_clothing ? "error" : ""
                  }`}
                >
                  {clothing_options.map((clothing) => (
                    <option value={clothing.value}>{clothing.label}</option>
                  ))}
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
                  placeholder={
                    traslate.FORM["PERSONALINFO"]["PHYSICAL-PLACEHOLDER"]
                  }
                  className={`input-content ${
                    errors.victim_pyshical ? "error" : ""
                  }`}
                >
                  {physical_options.map((physical) => (
                    <option value={physical.value}>{physical.label}</option>
                  ))}
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
            </Grid>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}
