import React from "react";
import traslate from "../../../assets/traslate/es.json";
import Input from "../../../components/Input/input";

export default function TheftInfo({ handleChange, persona }) {
  return (
    <>
      <Input
        title={traslate.FORM.THEFT}
        placeholder={traslate.FORM["THEFT-PLACEHOLDER"]}
        name="typeoftheft"
        value={persona.typeoftheft}
        onChange={handleChange}
      />

      <Input
        title={traslate.FORM.THIEFINFO}
        placeholder={traslate.FORM["THIEFINFO-PLACEHOLDER"]}
        name="theftinfo"
        value={persona.typeoftheft}
        onChange={handleChange}
      />
    </>
  );
}
