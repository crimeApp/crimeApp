import React from "react";
import traslate from "../../../assets/traslate/es.json";
import { Grid, Button } from "@material-ui/core";
import "../Form.css";

import { Formik, Form, Field } from "formik";

import * as Yup from "yup";

const place_options = [
  {
    label: "Parque",
    value: "parque",
  },
  {
    label: "Calle",
    value: "calle",
  },
  {
    label: "Parada de colectivo",
    value: "parada de colectivo",
  },
  {
    label: "Parada de colectivo",
    value: "parada de colectivo",
  },
  {
    label: "centro comercial",
    value: "centro comercial",
  }, {
    label: "propiedad privada",
    value: "propiedad privada",
  }, {
    label: "supermercado",
    value: "supermercado",
  },
  {
    label: "en el estacionamiento",
    value: "en el estacionamiento",
  },
  {
    label: "otro",
    value: "otro",
  }
];


const company_options = [
  {
    label: "sin compania pero con gente alrededor",
    value: "sin compania pero con gente alrededor",
  },
  {
    label: "acompaniado y con gente al rededor",
    value: "acompaniado y con gente al rededor",
  },
  {
    label: "sin compania y sin gente alrededor",
    value: "sin compania y sin gente alrededor",
  },
  {
    label: "acompaniado pero sin gente alrededor",
    value: "acompaniado pero sin gente alrededor",
  }
];

const typeoptions = [
 
  {
    label: "Abuso sexual",
    value: "abuso sexual",
  },
  {
    label: "Asesinato",
    value: "asesinato",
  },
  {
    label: "Robo",
    value: "robo",
  },
  {
    label: "Hurto",
    value: "hurto",
  },
  {
    label: "Asalto",
    value: "asalto",
  }
];

const houroptions = [
  {
    label: "Mañana",
    value: "mañana",
  },
  {
    label: "Mediodia",
    value: "mediodia",
  },
  {
    label: "tarde",
    value: "tarde",
  },
  {
    label: "noche",
    value: "noche",
  },
];

const TheftInfovalidation = Yup.object({
  type: Yup.string()
    .transform((e) => e.toLowerCase())
    .oneOf([
      "robo",
      "asesinato",
      "abuso sexual",
      "secuestro",
      "asalto",
      "hurto",
    ])
    .required('Completar la casilla'),
  hour: Yup.string()
    .transform((e) => e.toLowerCase())
    .oneOf(["mañana", "mediodia", "tarde", "noche"])
    .required('Completar la casilla'),
  date: Yup.date()
  .min(new Date("01/01/2010"))
  .max(new Date())
  .required('Ingresar una fecha valida'),
  place_description: Yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf([
        "otro",
        "en el estacionamiento",
        "parada de colectivo",
        "supermercado",
        "propiedad privada",
        "calle",
        "centro comercial",
        "parque"
      ])
      .required('Completar la casilla'),
  accompaniment: Yup
      .mixed()
      .transform((e) => e.toLowerCase())
      .oneOf([
        "sin compania pero con gente alrededor",
        "acompaniado y con gente al rededor",
        "sin compania y sin gente alrededor",
        "acompaniado pero sin gente alrededor",
      ])
      .required('Completar la casilla'),
});

export default function TheftInfo({ formData, handleNext }) {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h4 className='form-subtitle'>{traslate["FORM"]['THEFTINFO']['THIEFINFO']}</h4>
      <Formik
        initialValues={{
          type: "",
          hour: "",
          date: "",
          place_description: "",
          accompaniment: ""
        }}
        validationSchema={TheftInfovalidation}
        onSubmit={(values) => {
          formData = {
            type: values.type,
            hour: values.hour,
            date: values.date,
            place_description: values.place_description,
            accompaniment: values.accompaniment
          };
          console.log(formData);
          handleNext();
        }}
      >
        {({ errors, touched }) => (
          <Form className='form-content'>
            <Grid item xs={10} className="input-container p-top-1">
              <label className={"input-label"}>
                {traslate.FORM.THEFTINFO.THEFT}
              </label>
              <Field name="type" as="select" className={`input-content ${errors.type ? "error" : ""}`}>
                <option value={typeoptions[0].value}>
                  {typeoptions[0].label}
                </option>
                <option value={typeoptions[1].value}>
                  {typeoptions[1].label}
                </option>
                <option value={typeoptions[2].value}>
                  {typeoptions[2].label}
                </option>
                <option value={typeoptions[3].value}>
                  {typeoptions[3].label}
                </option>
                <option value={typeoptions[4].value}>
                  {typeoptions[4].label}
                </option>
              </Field>
              {errors.type && touched.type ? <p className={'error-message'}>{errors.type}</p> : null}
            </Grid>

            <Grid item xs={10} className="input-container m-top-1">
              <label className={"input-label"}>
                {traslate.FORM.THEFTINFO.TIMEFRACTION}
              </label>
              <Field name="hour" as="select" className={`input-content ${errors.hour ? "error" : ""}`}>
                <option value={houroptions[0].value}>
                  {houroptions[0].label}
                </option>
                <option value={houroptions[1].value}>
                  {houroptions[1].label}
                </option>
                <option value={houroptions[2].value}>
                  {houroptions[2].label}
                </option>
                <option value={houroptions[3].value}>
                  {houroptions[3].label}
                </option>
              </Field>

              {errors.hour && touched.hour ? <p className={'error-message'}>{errors.hour}</p> : null}
            </Grid>

            <Grid item xs={10} className="input-container m-top-1">
              <label className={"input-label"}>
                {traslate.FORM.THEFTINFO.DATE}
              </label>
              <Field name="date" type="date" className={`input-content ${errors.date ? "error" : ""}`} />
              {errors.date && touched.date ? <p className={'error-message'}>{errors.date}</p> : null}
            </Grid>

            <Grid item xs={10} className="input-container  m-top-1">
              <label className={"input-label"}>
                {traslate.FORM.THEFTINFO['COMPANY']}
              </label>
              <Field name="accompaniment" as="select" 
              className={`input-content ${errors.accompaniment ? "error" : ""}`}>
              <option value={company_options[0].value}>
                  {company_options[0].label}
                </option>
                <option value={company_options[1].value}>
                  {company_options[1].label}
                </option>
                <option value={company_options[2].value}>
                  {company_options[2].label}
                </option>
                <option value={company_options[3].value}>
                  {company_options[3].label}
                </option>
              </Field>
              {errors.accompaniment && touched.accompaniment ? <p className={'error-message'}>{errors.accompaniment}</p> : null}
            </Grid>

            <Grid item xs={10} className="input-container  m-top-1">
              <label className={"input-label"}>
                {traslate.FORM.THEFTINFO['PLACE-DESCRIPTION']}
              </label>
              <Field name="place_description" as="select" 
              className={`input-content ${errors.accompaniment ? "error" : ""}`}>
                <option value={place_options[0].value}>
                  {place_options[0].label}
                </option>
                <option value={place_options[1].value}>
                  {place_options[1].label}
                </option>
                <option value={place_options[2].value}>
                  {place_options[2].label}
                </option>
                <option value={place_options[3].value}>
                  {place_options[3].label}
                </option>
                <option value={place_options[4].value}>
                  {place_options[4].label}
                </option>
                <option value={place_options[5].value}>
                  {place_options[5].label}
                </option>
                <option value={place_options[6].value}>
                  {place_options[6].label}
                </option>
                <option value={place_options[7].value}>
                  {place_options[7].label}
                </option>
                <option value={place_options[8].value}>
                  {place_options[8].label}
                </option>
              </Field>
              {errors.place_description && touched.place_description ? <p className={'error-message'}>{errors.place_description}</p> : null}
            </Grid>

            <Button 
              variant="contained" 
              color="primary" 
              type="submit"
              className={'m-top-1'}>
                {traslate["COMMON"]["NEXT"]}
              </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}
