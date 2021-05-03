import React from "react";
import traslate from "../../../assets/traslate/es.json";
import Input from "../../../components/Input/input";

export default function TheftDetails({ handleChange, persona }) {
  return (
    <>
      <Input
        title={traslate.FORM.NAME}
        placeholder={traslate.FORM["NAME-PLACEHOLDER"]}
        name="name"
        value={persona.name}
        onChange={handleChange}
      />
    </>
  );
}
