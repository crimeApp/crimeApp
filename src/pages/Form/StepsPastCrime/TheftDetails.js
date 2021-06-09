import React, { Fragment } from "react";
import traslate from "../../../assets/traslate/es.json";
import { Grid, Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import CustomSwitch from '../../../components/Switch';
import * as Yup from "yup";

import "../Form.css";

const clothing_options = [
  { label: "Formal", value: "formal" },
  { label: "Casual", value: "casual" },
  { label: "Deportivo", value: "deportivo" },
  { label: "Trabajo", value: "trabajo" },
  { label: "Semiinformal", value: "semiformal" },
  { label: "Escolar", value: "escolar" },
  { label: "Arreglado", value: "arreglado" },
  { label: "Desalineado", value: "desalineado" },
];

const gender_options = [
  { label: "Hombre", value: "hombre" },
  { label: "Mujer", value: "mujer" },
  { label: "Prefiero no decir", value: "indefinido" },
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
  { label: "Atletico", value: "atletico" },
  { label: "Corpulento", value: "corpulento" },
];

const profile_options = [
  { label: "Violento", value: "violento" },
  { label: "Amable", value: "amable" },
  { label: "Tranquilo", value: "tranquilo" },
  { label: "Cauteloso", value: "cauteloso" },
  { label: "no recuerdo", value: "no recuerdo" },
  { label: "Visiblemente intoxicado", value: "intoxicado" },
  { label: "Indiferente", value: "indiferente" },
  { label: "Desconfiado", value: "desconfiado" },
];

const age_options = [
  { label: "Menor de edad", value: "menor" },
  { label: "18-25", value: "18-25" },
  { label: "25-35", value: "25-35" },
  { label: "35-45", value: "35-45" },
  { label: "+50", value: "+50" },
];

const TheftDetailvalidation = Yup.object({
  thief_profile: Yup.mixed()
    .oneOf([
      "violento",
      "amable",
      "tranquilo",
      "cauteloso",
      "desconfiado",
      "indiferente",
      "visiblemente intoxicado",
      "carismaticos",
      "no recuerdo",
    ])
    .required("Elija una de las opciones"),
  thief_age: Yup.mixed()
    .oneOf([
      "menor de edad",
      "18-25",
      "25-35",
      "35-45",
      "mas de 50",
      "No recuerdo",
    ])
    .required("Elija una de las opciones"),
  thief_height: Yup.mixed().oneOf(["alto", "mediano", "bajo", "no recuerdo"]),
  thief_clothing: Yup.mixed().oneOf([
    "formal",
    "casual",
    "deportivo",
    "trabajo",
    "semiformal",
    "escolar",
    "arreglado",
    "desalineado"
  ]),
  thief_physical: Yup.mixed().oneOf([
    "delgado",
    "casual",
    "corpulento",
    "obeso",
    "atletico"
  ]),
  complaint: Yup.boolean().optional(),
  arrested: Yup.boolean().optional(),
});

export default function TheftDetails({ formData, handleNext, handleBack }) {
  const { 
    thief_profile,
    thief_age,
    thief_height,
    thief_clothing,
    thief_physical,
    thief_complaint,
    thief_arrested } = formData;

  return (
    <Fragment>
      <Formik
        initialValues={{
          thief_profile: thief_profile,
          thief_age: thief_age,
          thief_height: thief_height,
          thief_clothing: thief_clothing,
          thief_physical: thief_physical,
          thief_complaint: thief_complaint,
          thief_arrested: thief_arrested 
        }}
        validationSchema={TheftDetailvalidation}
        onSubmit={(values) => {
          formData.thief_profile = values.thief_profile;
          formData.thief_age = values.thief_age;
          formData.thief_gender = values.thief_gender;
          formData.thief_height =  values.thief_height;
          formData.thief_clothing = values.thief_clothing;
          formData.thief_physical = values.thief_physical;
          formData.complaint = values.complaint;
          formData.arrested = values.arrested;
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
              {traslate["FORM"]["THEFTDETAILS"]["THIEFINFO"]}
            </h4>

            <Form className="m-left-3 m-right-3">
              {/* Thief profile */}

              <Grid item xs={12} className="m-left-3">
                <label className={"input-label"}>
                  {traslate.FORM.THEFTDETAILS["PROFILE"]}
                </label>
              </Grid>

              <Grid item xs={12} className="m-bottom-1 m-left-3">
                <Field
                  name="thief_profile"
                  type="string"
                  as="select"
                  placeholder={
                    traslate.FORM["THEFTDETAILS"]["PROFILE-PLACEHOLDER"]
                  }
                  className={`input-content ${
                    errors.thief_profile ? "error" : ""
                  }`}
                >
                  {profile_options.map((profile) => (
                    <option key={profile.value} value={profile.value}>{profile.label}</option>
                  ))}
                </Field>
                {errors.thief_profile && touched.thief_profile ? (
                  <p className="error-message m-bottom-1 m-top-1">
                    {errors.thief_profile}
                  </p>
                ) : null}
              </Grid>

              {/* Thief age */}

              <Grid item xs={12} className="m-left-3">
                <label className={"input-label"}>
                  {traslate.FORM.THEFTDETAILS["AGE"]}
                </label>
              </Grid>
              <Grid item xs={12} className="m-bottom-1 m-left-3">
                <Field
                  name="thief_age"
                  type="string"
                  as="select"
                  placeholder={traslate.FORM["THEFTDETAILS"]["AGE-PLACEHOLDER"]}
                  className={`input-content ${errors.thief_age ? "error" : ""}`}
                >
                  {age_options.map((age_option) => (
                    <option key={age_option.value} value={age_option.value}>{age_option.label}</option>
                  ))}
                </Field>
                {errors.thief_age && touched.thief_age ? (
                  <p className="error-message m-bottom-1 m-top-1">
                    {errors.thief_age}
                  </p>
                ) : null}
              </Grid>

              <Grid item xs={12} className="m-bottom-1 m-left-3">
                <label className={"input-label"}>
                  {traslate.FORM["THEFTDETAILS"]["GENDER"]}
                </label>
              </Grid>
              <Grid item xs={12} className="m-bottom-3 m-left-3">
                <Field
                  name="thief_gender"
                  type="string"
                  as="select"
                  className={`input-content ${errors.thief_gender ? "error" : ""
                    }`}
                >
                  {gender_options.map((gender) => (
                    <option key={gender.value} value={gender.value}>{gender.label}</option>
                  ))}
                 
                </Field>
                {errors.thief_gender && touched.thief_gender ? (
                  <p className={"error-message"}>{errors.thief_gender}</p>
                ) : null}
              </Grid>

              {/* Thief height */}

              <Grid item xs={12} className="m-left-3">
                <label className={"input-label"}>
                  {traslate.FORM.THEFTDETAILS["HEIGHT"]}
                </label>
              </Grid>
              <Grid item xs={12} className="m-bottom-1 m-left-3">
                <Field
                  name="thief_height"
                  type="string"
                  as="select"
                  placeholder={
                    traslate.FORM["THEFTDETAILS"]["HEIGHT-PLACEHOLDER"]
                  }
                  className={`input-content ${
                    errors.thief_height ? "error" : ""
                  }`}
                >
                  {height_options.map((height) => (
                    <option key={height.value} value={height.value}>
                      {height.label}
                    </option>
                  ))}
                </Field>
                {errors.thief_height && touched.thief_height ? (
                  <p className="error-message m-bottom-1 m-top-1">
                    {errors.thief_height}
                  </p>
                ) : null}
              </Grid>

              <Grid item xs={12} className="m-left-3">
                <label className={"input-label"}>
                  {traslate.FORM.THEFTDETAILS["CLOTHING"]}
                </label>
              </Grid>
              <Grid item xs={12} className="m-bottom-1 m-left-3">
                <Field
                  name="thief_clothing"
                  type="string"
                  as="select"
                  className={`input-content ${
                    errors.thief_clothing ? "error" : ""
                  }`}
                >
                  {clothing_options.map((clothing) => (
                    <option key={clothing.value} value={clothing.value}>{clothing.label}</option>
                  ))}
                </Field>

                {errors.thief_clothing && touched.thief_clothing ? (
                  <p className="error-message m-bottom-1 m-top-1">
                    {errors.thief_clothing}
                  </p>
                ) : null}
              </Grid>

              <Grid item xs={12} className="m-left-3">
                <label className={"input-label"}>
                  {traslate.FORM.THEFTDETAILS["PHYSICAL"]}
                </label>
              </Grid>
              <Grid item xs={12} className="m-bottom-1 m-left-3">
                <Field
                  name="thief_physical"
                  type="string"
                  as="select"
                  className={`input-content ${
                    errors.thief_physical ? "error" : ""
                  }`}
                >
                  {physical_options.map((physical) => (
                    <option key={physical.value} value={physical.value}>{physical.label}</option>
                  ))}
                </Field>
                {errors.thief_physical && touched.thief_physical ? (
                  <p className="error-message m-bottom-1 m-top-1">
                    {errors.thief_pyshical}
                  </p>
                ) : null}
              </Grid>

             <Grid item xs={12} className="m-bottom-1 m-left-3">
              <Field
                name="thief_complaint"
                type="checkbox"
                component={CustomSwitch}
                labelText={'Se hizo una denuncia?' }
              />
              </Grid>

              <Grid item xs={12} className="m-bottom-2 m-left-3">
              <Field
                name="thief_arrested"
                type="checkbox"
                component={CustomSwitch}
                labelText={'Fue arrestado?'}
              />
              </Grid> 

              <Grid item xs={12} className="m-top-1">
                <div className="form-controls m-right-3 m-left-3">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleBack}
                    className="m-right-3 m-left-3"
                  >
                    {traslate["COMMON"]["BACK"]}
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="m-left-3"
                  >
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
