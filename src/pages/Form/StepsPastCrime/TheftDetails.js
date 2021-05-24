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

const height_options = [{ label: "Alto", value: "alto" }, { label: "Mediano", value: "mediano" },{ label: "Bajo", value: "bajo" } ];

const physical_options = [
  `${traslate["PHYSICAL_BUILD"]["THIN"]}`,
  `${traslate["PHYSICAL_BUILD"]["NORMAL"]}`,
  `${traslate["PHYSICAL_BUILD"]["STRONG"]}`,
  `${traslate["PHYSICAL_BUILD"]["OBESE"]}`,
  `${traslate["PHYSICAL_BUILD"]["ATHELTIC"]}`
];

const profile_options = [{ label: "Violento", value: "violento" }, { label: "Amable", value: "amable" },
{ label: "Tranquilo", value: "tranquilo" },{ label: "Cauteloso", value: "cauteloso" }, 
{ label: "no recuerdo", value: "no recuerdo" },{ label: "Visiblemente intoxicado", value: "intoxicado" },
{ label: "Indiferente", value: "indiferente" }, { label: "Desconfiado", value: "desconfiado" }
];

const age_options = [{ label: "Menor de edad", value: "menor" }, { label: "18-25", value: "18-25" },
{ label: "25-35", value: "25-35" },{ label: "35-45", value: "35-45" }, 
{ label: "+50", value: "+50" }];

const TheftDetailvalidation = Yup.object({
  thief_profile: Yup
      .mixed()
      .oneOf(["violento", "amable", "tranquilo", "cauteloso", "desconfiado", 
      "indiferente", "visiblemente intoxicado", "carismaticos", "no recuerdo"] )
      .required('Elija una de las opciones'),
  thief_age: Yup
      .mixed()
      .oneOf(["menor de edad", "18-25", "25-35", "35-45", "mas de 50"])
      .required('Elija una de las opciones'),
  thief_height: Yup
      .mixed()
      .optional(),
  thief_skin: Yup
      .mixed()
      .optional(),
  thief_clothing: Yup
      .mixed()
      .optional(),
  thief_physical: Yup
      .mixed()
      .optional(),
  complaint: Yup.boolean().optional(),
  arrested: Yup.boolean().optional(),
});

export default function TheftDetails({ formData, handleNext, handleBack }) {
  return (
    <Grid container direction="column" justify="center" alignItems="center" className='form-content'>
      <h4 className='form-subtitle'>{traslate['FORM']['THEFTDETAILS']['THIEFINFO']}</h4>
        <Formik
          initialValues={{
            thief_profile: "",
            thief_age: "",
            thief_height: "",
            thief_skin: "",
            thief_clothing: "",
            thief_pyshical: "",/* 
            thief_complaint: false,
            thief_arrested: false */
          }}
          validationSchema={TheftDetailvalidation}
          onSubmit={(values) => {
            if(values){
              formData = {
                thief_profile: values.thief_profile,
                thief_age: values.thief_age,
                thief_height: values.thief_height,
                thief_skin: values.thief_skin,
                thief_clothing: values.thief_clothing,
                thief_pyshical: values.thief_pyshical,
              };
            } 
            console.log(formData);
            handleNext();
          }}
        >
          {({ errors, touched }) => (
            <Form className='form-content'>

              {/* Thief profile */}

              <Grid item xs={12} className="input-container m-top-2">
                <label className={"input-label"}>
                  {traslate.FORM.THEFTDETAILS["PROFILE"]}
                </label>
                <Field
                  name="thief_profile"
                  type="string"
                  as='select'
                  placeholder={
                    traslate.FORM["THEFTDETAILS"]["PROFILE-PLACEHOLDER"]
                  }
                  className={`input-content ${errors.thief_profile ? "error" : ""
                    }`}
                >
                  <option value={profile_options[0].value}>{profile_options[0].label}</option>
                  <option value={profile_options[1].value}>{profile_options[1].label}</option>
                  <option value={profile_options[2].value}>{profile_options[2].label}</option>
                  <option value={profile_options[3].value}>{profile_options[3].label}</option>
                  <option value={profile_options[4].value}>{profile_options[4].label}</option>
                  <option value={profile_options[5].value}>{profile_options[5].label}</option>
                  <option value={profile_options[6].value}>{profile_options[6].label}</option>
                  <option value={profile_options[7].value}>{profile_options[7].label}</option>

                </Field>
                {errors.thief_profile && touched.thief_profile ? (
                  <p className={"error-message"}>{errors.thief_profile}</p>
                ) : null}
              </Grid>

              {/* Thief age */}

              <Grid item xs={12} className="input-container m-top-2">
                <label className={"input-label"}>
                  {traslate.FORM.THEFTDETAILS["AGE"]}
                </label>
                <Field
                  name="thief_age"
                  type="string"
                  as="select"
                  placeholder={
                    traslate.FORM["THEFTDETAILS"]["AGE-PLACEHOLDER"]
                  }
                  className={`input-content ${errors.thief_age ? "error" : ""
                    }`}
                >
                  
                  <option value={age_options[0].value}>{age_options[0].label}</option>
                  <option value={age_options[1].value}>{age_options[1].label}</option>
                  <option value={age_options[2].value}>{age_options[2].label}</option>
                  <option value={age_options[3].value}>{age_options[3].label}</option>

                </Field>
                {errors.thief_age && touched.thief_age ? (
                  <p className={"error-message"}>{errors.thief_age}</p>
                ) : null}
              </Grid>

              {/* Thief height */}

              <Grid item xs={12} className="input-container m-top-2">
                <label className={"input-label"}>
                  {traslate.FORM.THEFTDETAILS["HEIGHT"]}
                </label>
                <Field
                  name="thief_height"
                  type="string"
                  as='select'
                  placeholder={
                    traslate.FORM["THEFTDETAILS"]["HEIGHT-PLACEHOLDER"]
                  }
                  className={`input-content ${errors.thief_height ? "error" : ""
                    }`}>
                       <option value={height_options[0].value}>{height_options[0].label}</option>
                       <option value={height_options[0].value}>{height_options[0].label}</option>
                       <option value={height_options[0].value}>{height_options[0].label}</option>
                  </Field>
                {errors.thief_height && touched.thief_height ? (
                  <p className={"error-message"}>{errors.thief_height}</p>
                ) : null}
              </Grid>

              {/* <Grid item xs={12} className="input-container m-top-2">
                <label className={"input-label"}>
                  {traslate.FORM.THEFTDETAILS["SKIN"]}
                </label>
                <Field
                  name="thief_skin"
                  type="string"
                  as="select"
                  placeholder={traslate.FORM["THEFTDETAILS"]["GENDER-PLACEHOLDER"]}
                  className={`input-content ${errors.thief_skin ? "error" : ""}`}
                >
                  <option value={traslate["GENDER"]["WOMAN"]}>
                    {traslate["GENDER"]["WOMAN"]}
                  </option>
                  <option value={traslate["GENDER"]["MAN"]}>
                    {traslate["GENDER"]["MAN"]}
                  </option>
                </Field>
                {errors.thief_skin && touched.thief_skin ? (
                  <p className={"error-message"}>{errors.thief_skin}</p>
                ) : null}
              </Grid> */}

              <Grid item xs={12} className="input-container m-top-2">
                <label className={"input-label"}>
                  {traslate.FORM.THEFTDETAILS["CLOTHING"]}
                </label>
                <Field
                  name="thief_clothing"
                  type="string"
                  as="select"
                  className={`input-content ${errors.thief_clothing ? "error" : ""
                    }`}
                >
                  <option value={traslate["GENDER"]["WOMAN"]}>
                    {traslate["GENDER"]["WOMAN"]}
                  </option>
                  <option value={traslate["GENDER"]["MAN"]}>
                    {traslate["GENDER"]["MAN"]}
                  </option>
                </Field>

                {errors.thief_clothing && touched.thief_clothing ? (
                  <p className={"error-message"}>{errors.thief_clothing}</p>
                ) : null}
              </Grid>

              <Grid item xs={12} className="input-container m-top-2">
                <label className={"input-label"}>
                  {traslate.FORM.THEFTDETAILS["PHYSICAL"]}
                </label>
                <Field
                  name="thief_pyshical"
                  type="string"
                  as="select"
                  className={`input-content ${errors.thief_pyshical ? "error" : ""
                    }`}
                >
                  <option value={traslate["GENDER"]["WOMAN"]}>
                    {traslate["GENDER"]["WOMAN"]}
                  </option>
                  <option value={traslate["GENDER"]["MAN"]}>
                    {traslate["GENDER"]["MAN"]}
                  </option>
                </Field>
                {errors.thief_pyshical && touched.thief_pyshical ? (
                  <p className={"error-message"}>{errors.thief_pyshical}</p>
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

 


