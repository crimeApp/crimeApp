import React from 'react';
import traslate from "../../../assets/traslate/es.json";
import Input from "../../../components/Input/input";

export default function PersonalDetails({ handleChange, persona }) {

    return (
      <>
        <Input
            title={traslate.FORM.NAME}
            placeholder={traslate.FORM["NAME-PLACEHOLDER"]}
            name="name"
            value={persona.name}
            onChange={handleChange}
        />

        <Input
            title={traslate.FORM.DNI}
            placeholder={traslate.FORM["DNI-PLACEHOLDER"]}
            name="DNI"
            value={persona.DNI}
            onChange={handleChange}
        />
      </>
    );
  }