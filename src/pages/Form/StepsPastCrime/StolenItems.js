import React from "react";
import traslate from "../../../assets/traslate/es.json";
import { Grid, Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "../Form.css";

const itemoptions = [
    {
        label: "celular",
        value: "celular",
      },
      {
        label: "billetera",
        value: "billetera",
      }
];

const StolenItemsvalidation = Yup.object({
  stolen_items: Yup.string()
    .transform((e) => e.toLowerCase())
    .oneOf([
      "celular",
      "billetera",
      "documentacion",
      "dinero",
      "auto",
      "computadora",
      "notebook",
      "herramientas",
      "mochila",
      "cartera",
      "llaves",
      "motocicleta",
      "ropa",
      "objetos recien comprados",
      "alimento",
      "accesorios",
      "tarjetas debito/credito",
      "electrodomesticos",
      "muebles",
      "dolares",
      "joyeria",
      "objetos de valor personal",
      "reliquias",
      "maquinaria",
      "mascotas",
      "otros",
    ])
    .required("Completar la casilla"),
  stolen_cash: Yup.number()
    .min(100000)
    .max(99999999)
    .required("Completar la casilla"),
    /*  geopoint: Yup.object({
      lat: Yup.number().min(0).max(90),
      lng: Yup.number().min(0).max(180) */
});

export default function StolenItems({ formData, handleNext, handleBack }) {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h4 className='form-subtitle'>{traslate["FORM"]['THEFTINFO']['THIEFINFO']}</h4>
      <Formik
        initialValues={{
          stolen_cash: "",
          stolen_items: "",
        }}
        validationSchema={StolenItemsvalidation}
        onSubmit={(values) => {
          formData = formData = {
            stolen_cash: values.stolen_cash,
            stolen_items: values.stolen_items,
          };
          console.log(formData);
          handleNext();
        }}
      >
        {({ errors, touched }) => (
          <Form className="form-content">
            {/* Stolen cash */}

            <Grid item xs={10} className="input-container m-top-2">
              <label className={"input-label"}>
                {traslate.FORM["THEFTINFO"]["STOLEN-CAPITAL"]}
              </label>
              <Field
                name="stolen_cash"
                type="string"
                placeholder={traslate.FORM["THEFTINFO"]["STOLEN-CAPITAL-PLACEHOLDER"]}
                className={`input-content ${errors.stolen_cash ? "error" : ""}`}
              />
              {errors.stolen_cash && touched.stolen_cash ? (
                <p className={"error-message"}>{errors.stolen_cash}</p>
              ) : null}
            </Grid>

            {/* Stolen Items */}

            <Grid item xs={10} className="input-container m-top-2">
              <label className={"input-label"}>
              {traslate.FORM["THEFTINFO"]["STOLEN-OBJECTS"]}
              </label>
              <Field
                name="stolen_items"
                type="string"
                as="select"
                placeholder={traslate.FORM["THEFTINFO"]["STOLEN-OBJECTS-PLACEHOLDER"]}
                className={`input-content ${errors.stolen_items ? "error" : ""}`}
              >
                <option value={itemoptions[0].value}>
                  {itemoptions[0].label}
                </option>
                <option value={itemoptions[1].value}>
                  {itemoptions[1].label}
                </option>
              </Field>

              {errors.stolen_items && touched.stolen_items ? (
                <p className={"error-message"}>{errors.stolen_items}</p>
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
