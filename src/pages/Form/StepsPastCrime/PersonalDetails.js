import React from "react";
import traslate from "../../../assets/traslate/es.json";
import Input from '../../../components/Input/Input';
import { Grid, Button } from "@material-ui/core";

import "../Form.css";

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

export default function PersonalDetails({ formData, handleNext, handleBack, isMobile }) {

  return (
    <>
      <Grid item>
        <Input
          type='text'
          label={traslate.FORM.NAME}
          placeholder={traslate.FORM["NAME-PLACEHOLDER"]}
          name="name"
        />
      </Grid>
      <Grid item>
        <Input
          type='number'
          label={traslate.FORM.DNI}
          placeholder={traslate.FORM["DNI-PLACEHOLDER"]}
          name="DNI"
        />
      </Grid>

      <Grid item className="form-controls">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <Button variant="contained" color="primary" onClick={''}>
              {traslate["COMMON"]["BACK"]}
            </Button>
          </Grid>

          <Grid item>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {traslate["COMMON"]["NEXT"]}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
 