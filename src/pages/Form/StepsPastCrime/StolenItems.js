import React, {  Fragment } from "react";
import traslate from "../../../assets/traslate/es.json";
import { Grid, Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "../Form.css";

const item_options = [
  {
    label: "celular",
    value: "celular",
  },
  {
    label: "billetera",
    value: "billetera",
  },
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
    .min(1)
    .max(99999999)
    .required("Completar la casilla"),
  geopoint: Yup.object({
      lat: Yup.number().min(0).max(90),
      lng: Yup.number().min(0).max(180)
  }) 
});

export default function StolenItems({ formData, handleNext, handleBack }) {

  return (
    <Fragment>
      <Formik
        initialValues={{
          stolen_cash: "",
          stolen_items: "",
        }}
        validationSchema={StolenItemsvalidation}
        onSubmit={(values) => {
          formData.stolen_cash = values.stolen_cash;
          formData.stolen_items = values.stolen_items;
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
              {traslate["FORM"]["THEFTINFO"]["THIEFINFO"]}
            </h4>
            <Form className="m-left-4 m-right-4">
              <Grid item xs={9} className="m-left-4">
                <label className={"input-label"}>
                  {traslate.FORM["THEFTINFO"]["STOLEN-CAPITAL"]}
                </label>
              </Grid>
              <Grid item xs={9} className="m-bottom-3 m-left-4">
                <Field
                  name="stolen_cash"
                  type="string"
                  placeholder={
                    traslate.FORM["THEFTINFO"]["STOLEN-CAPITAL-PLACEHOLDER"]
                  }
                  className={`input-content ${errors.stolen_cash ? "error" : ""
                    }`}
                />
                {errors.stolen_cash && touched.stolen_cash ? (
                  <p className="error-message m-bottom-1 m-top-1">
                    {errors.stolen_cash}
                  </p>
                ) : null}
              </Grid>

              <Grid item xs={9} className="m-left-4">
                <label className={"input-label"}>
                  {traslate.FORM["THEFTINFO"]["STOLEN-OBJECTS"]}
                </label>
              </Grid>

              <Grid item xs={9} className="m-bottom-3 m-left-4">
                <Field
                  name="stolen_items"
                  type="string"
                  as="select"
                  placeholder={
                    traslate.FORM["THEFTINFO"]["STOLEN-OBJECTS-PLACEHOLDER"]
                  }
                  className={`input-content ${errors.stolen_items ? "error" : ""
                    }`}
                >
                  {item_options.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                  ))}
                </Field>

                {errors.stolen_items && touched.stolen_items ? (
                  <p className="error-message m-bottom-1 m-top-1">
                    {errors.stolen_items}
                  </p>
                ) : null}
              </Grid>

              <Grid item xs={9} className="p-left-3">
                <label className={"input-label"}>
                  Ubicacion
                </label>

              </Grid>
            
{/*                  <div className="m-right-1">
                  <ShowMap />
                  </div>  */}


              <Grid item xs={6} className="m-top-1">
                <div className='form-controls m-right-4 m-left-4'>
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
