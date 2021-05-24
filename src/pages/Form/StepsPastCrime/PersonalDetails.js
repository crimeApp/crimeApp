import React from "react";
import traslate from "../../../assets/traslate/es.json";
import { Grid, Button } from "@material-ui/core";

import { Formik, Form, Field } from "formik";

import * as Yup from "yup";

import "../Form.css";

const PersonalInfovalidation = Yup.object({
  name: Yup.string()
    .transform((e) => e.toLowerCase())
    .required("Completar la casilla"),
  DNI: Yup.number().required("Completar la casilla"),
});

/* const schemaRequest = yup.object().shape({
  
  victim_gender: yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf(TRASLATE.GENDER)
      .optional(),
  victim_dni: yup
      .number()
      .min(100000)
      .max(99999999),
  victim_age: yup
      .number()
      .max(100)
      .min(1),
  victim_height: yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf(TRASLATE.HEIGHT)
      .required(),
  victim_skin: yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf(TRASLATE.SKIN)
      .optional(),
  victim_clothing: yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf(TRASLATE.CLOTHING),
  victim_physical: yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf(TRASLATE.PHYSICAL_BUILD),
  stolen_items: yup
      .mixed()
      .transform((e) => e.map( i => i.toLowerCase()))
      .notOneOf(["celular", "billetera", "documentacion", 
      "dinero", "auto", "computadora", "notebook", "herramientas", 
      "mochila", "cartera", "llaves", "motocicleta", "ropa", 
      "objetos recien comprados", "alimento", "accesorios", 
      "tarjetas debito/credito", "electrodomesticos", "muebles", 
      "dolares", "joyeria", "objetos de valor personal", "reliquias", 
      "maquinaria", "mascotas", "otros"])
      .required(),
  stolem_cash: yup
      .number()
      .required(),
  */

export default function PersonalDetails({ formData, handleNext, handleBack }) {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Formik
        initialValues={{
          name: "",
          DNI: ""
        }}
        validationSchema={PersonalInfovalidation}
        onSubmit={(values) => {
          formData = {
            name: values.name,
            DNI: values.DNI
          };
          console.log(formData);
          handleNext();
        }}
      >
        {({ errors, touched }) => (
          <Form className="form-content">
            <Grid item xs={10} className="input-container m-top-2">
              <label className={"input-label"}>
                {traslate.FORM.PERSONALINFO["NAME"]}
              </label>
              <Field
                name="name"
                type="string"
                placeholder={traslate.FORM.PERSONALINFO["NAME-PLACEHOLDER"]} 
                className={`input-content ${errors.name ? "error" : ""}`}
              />
              {errors.name && touched.name ? (
                <p className={"error-message"}>{errors.name}</p>
              ) : null}
            </Grid>

            <Grid item xs={10} className="input-container m-top-2">
              <label className={"input-label"}>
                {traslate.FORM.PERSONALINFO["DNI"]}
              </label>
              <Field
                name="DNI"
                type="number"
                placeholder={traslate.FORM.PERSONALINFO["DNI-PLACEHOLDER"]} 
                className={`input-content ${errors.DNI ? "error" : ""}`}
              />
              {errors.DNI && touched.DNI ? (
                <p className={"error-message"}>{errors.DNI}</p>
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
                <Button variant="contained" color="primary">
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
