import React, { Fragment } from "react";
import traslate from "../../../assets/traslate/es.json";
import { Grid, Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "../Form.css";

const clothing_options = [
  { label: "Formal", value: "formal" },
  { label: "Casual", value: "casual" },
  { label: "Deportivo", value: "deportivo" },
  { label: "Trabajo", value: "trabajo" },
  { label: "Semiinformal", value: "semiinformal" },
  { label: "Escolar", value: "escolar" },
  { label: "Limpio", value: "limpio" },
  { label: "Desalineado", value: "desalineado" },
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

const PersonalInfovalidation = Yup.object({
  victim_height: Yup.mixed().oneOf(["alto", "mediano", "bajo", "no recuerdo"]),
  victim_skin: Yup.string()
    .transform((e) => e.toLowerCase())
    .optional(),
  victim_clothing: Yup.string()
    .transform((e) => e.toLowerCase())
    .oneOf([
      "formal",
      "casual",
      "deportivo",
      "trabajo",
      "semiformal",
      "escolar",
      "arreglado",
      "desalineado"
    ]),
  victim_physical: Yup.string()
    .transform((e) => e.toLowerCase())
    .oneOf([
      "delgado",
      "casual",
      "corpulento",
      "obeso",
      "atletico"
    ]),
});

export default function PersonalDetails2({ formData, handleNext, handleBack }) {
  const { victim_height, victim_clothing, victim_pyshical} = formData;
  return (
    <Fragment>
      <Formik
          initialValues={{
          victim_height: victim_height,
          victim_clothing: victim_clothing,
          victim_pyshical: victim_pyshical,
        }}
        validationSchema={PersonalInfovalidation}
        onSubmit={(values) => {
          formData.victim_height = values.victim_height;
          formData.victim_clothing = values.victim_clothing;
          formData.victim_pyshical =  values.victim_pyshical;
        
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

              <Grid item xs={12} className="m-bottom-1 m-left-3">
                 <label className={"input-label"}>
                  {traslate.FORM.PERSONALINFO["HEIGHT"]}
                </label>
              </Grid>
              <Grid item xs={12} className="m-bottom-3 m-left-3">
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
                  {height_options.map((height) => (
                    <option key={height.value} value={height.value}>
                      {height.label}
                    </option>
                  ))}
                </Field>
                {errors.victim_height && touched.victim_height ? (
                  <p className={"error-message"}>{errors.victim_height}</p>
                ) : null}
              </Grid>

              <Grid item xs={12} className="m-bottom-1 m-left-3">
               <label className={"input-label"}>
                  {traslate.FORM.PERSONALINFO["CLOTHING"]}
                </label>
              </Grid>
              <Grid item xs={12} className="m-bottom-3 m-left-3">
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
                    <option key={clothing.value} value={clothing.value}>{clothing.label}</option>
                  ))}
                </Field>
              </Grid>

              <Grid item xs={12} className="m-bottom-1 m-left-3">
                <label className={"input-label"}>
                  {traslate.FORM.PERSONALINFO["PHYSICAL"]}
                </label>
              </Grid>
              <Grid item xs={12} className="m-bottom-3 m-left-3">
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
                    <option key={physical.value} value={physical.value}>{physical.label}</option>
                  ))}
                </Field>
                {errors.victim_pyshical && touched.victim_pyshical ? (
                  <p className={"error-message"}>{errors.victim_pyshical}</p>
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
