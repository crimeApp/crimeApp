import React from "react";
import traslate from "../../../assets/traslate/es.json";
import Input from '../../../components/Input/Input';

import {
  Grid,
  Button
} from "@material-ui/core";

import "../Form.css";

/*
  place_description: yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf(["parque", "calle", "parada de colectivo", "centro comercial", 
      "en propiedad privada", "supermercado", "en el trabajo", 
      "en el estacionamiento", "otros"]),
  accompaniment: yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf(["sin compania pero con gente alrededor", "acompaniado pero sin gente alrededor", 
      "acompaniado y con gente al rededor", "sin compania y sin gente alrededor"]),
  geopoint: yup.object({
      lat: yup.number().min(0).max(90),
      lng: yup.number().min(0).max(180)
  }),
  thief_perfil: yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf(["violento", "amable", "tranquilo", "agresivo", "cauteloso", "desconfiado", 
      "indiferente", "visiblemente intoxicado", "carismaticos", "no recuerdo"] )
      .required(),
  thief_age: yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf(["menor de edad", "18-25", "25-35", "35-45", "mas de 50"])
      .required(),
  thief_height: yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf(TRASLATE.HEIGHT)
      .required(),
  thief_skin: yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf(TRASLATE.SKIN)
      .required(),
  thief_clothin: yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf(TRASLATE.CLOTHING)
      .required(),
  thief_physical: yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf(TRASLATE.PHYSICAL_BUILD),
  complaint: yup.boolean(),
  arrested: yup.boolean()
}); */

export default function TheftDetails({ formData, handleNext, handleBack, isMobile }) {

  return (
    <form>
    <Grid item>
      <Input
        title={traslate.FORM.NAME}
        placeholder={traslate.FORM["NAME-PLACEHOLDER"]}
        
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
            <Button
              disabled
              variant="contained"
              color="primary"
              onClick={handleBack}
            >
              {traslate["COMMON"]["BACK"]}
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              type="submit"
            >
              {traslate["COMMON"]["NEXT"]}
            </Button>
          </Grid>
        </Grid>
        </Grid>
    </form>
  );
}
