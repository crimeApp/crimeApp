import React from "react";
import traslate from "../../../assets/traslate/es.json";
//import Select from "../../../components/Select/Select";
//import Input from "../../../components/Input/Input";
import { Grid, Button } from "@material-ui/core";
import "../Form.css";

import { useFormik } from "formik";
import * as Yup from "yup";

const typeoptions = [
  {
    label: "secuestro",
    value: "secuestro",
  },
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
  },
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

export default function TheftInfo({ formData, handleNext }) {
  const formik = useFormik({
    initialValues: {
      type: "",
      hour: "",
      date: "",
    },
    validationSchema: Yup.object({
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
        .required(),
      hour: Yup.string()
        .transform((e) => e.toLowerCase())
        .oneOf(["mañana", "mediodia", "tarde", "noche"])
        .required(),
      date: Yup.date().min(new Date("01/01/2010")).max(new Date()),
    }),
  });

  const handleSubmit = () => {
    formData = {
      type: formik.values.type,
      hour: formik.values.hour,
      date: formik.values.date,
    };
    console.log(formData)
    handleNext();
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <form onSubmit={formik.handleSubmit} className="form-content">
        <Grid item xs={12}>
          {/* <Select
          id="type"
          name="type"
          type="string"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.type}
          label=
          options={theftoptions}
        /> */}
          <label className={"input-label"}>
            {traslate.FORM.THEFTINFO.THEFT}
          </label>

          <select
            id="type"
            name="type"
            className={"input-content"}
            value={formik.values.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value={typeoptions[0].value}>{typeoptions[0].label}</option>
            <option value={typeoptions[1].value}>{typeoptions[1].label}</option>
            <option value={typeoptions[2].value}>{typeoptions[2].label}</option>
            <option value={typeoptions[3].value}>{typeoptions[3].label}</option>
            <option value={typeoptions[4].value}>{typeoptions[4].label}</option>
            <option value={typeoptions[5].value}>{typeoptions[5].label}</option>
          </select>

          {formik.touched.type && formik.errors.type ? (
            <div className="error-message">{formik.errors.type}</div>
          ) : null}
        </Grid>

        <Grid item xs={12}>
          {/*  <Select
          label={traslate.FORM.THEFTINFO.TIMEFRACTION}
          options={timefractions}
          id="time"
          name="time"
          type="string"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.time}
          
        /> */}

          <label className={"input-label"}>
            {traslate.FORM.THEFTINFO.TIMEFRACTION}
          </label>

          <select
            id="hour"
            name="hour"
            className={"input-content"}
            value={formik.values.hour}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value={houroptions[0].value}>{houroptions[0].label}</option>
            <option value={houroptions[1].value}>{houroptions[1].label}</option>
            <option value={houroptions[2].value}>{houroptions[2].label}</option>
            <option value={houroptions[3].value}>{houroptions[3].label}</option>
          </select>

          {formik.touched.hour && formik.errors.hour ? (
            <div className="error-message">{formik.errors.hour}</div>
          ) : null}
        </Grid>

        <Grid item xs={12}>
          {/* <Input
            id="date"
            type="date"
            name="date"
            error={formik.errors.firstName}
            label=
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          /> */}
          <label className={"input-label"}>
            {traslate.FORM.THEFTINFO.DATE}
          </label>
          <input
            name="date"
            type="date"
            className={"input-content"}
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>

        <Grid item>
          {formik.touched.date && formik.errors.date ? (
            <div className="error-message">{formik.errors.date}</div>
          ) : null}
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
              <Button disabled variant="contained" color="primary">
                {traslate["COMMON"]["BACK"]}
              </Button>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleSubmit}
              >
                {traslate["COMMON"]["NEXT"]}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
