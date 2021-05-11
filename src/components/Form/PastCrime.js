import React, { useState, useEffect } from "react";
import { useForm, useStep } from "react-hooks-helper";
import traslate from "../../assets/traslate/es.json";
import FormWrapper from "./FormWrapper";
import PersonalDetails from "./StepsPastCrime/PersonalDetails";
import TheftInfo from "./StepsPastCrime/TheftInfo";
import TheftDetails from "./StepsPastCrime/TheftDetails";
import Review from './Review';
import Submit from './Submit';

import "./Form.css";


const defaultData = {
  name: "",
  DNI: "",
  typeoftheft: "",
  theftinfo: "",
};

const steps = [
  { id: "names" },
  { id: "address" },
  { id: "contact" },
  { id: "review" },
  { id: "submit" },
];

export default function PastCrime() {
  const [formData, setForm] = useForm(defaultData);
  const [errors, setErrors] = useState({});
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      
    }
  }, [errors]);
 

  const props = { formData, setForm, navigation, errors, setErrors };

  switch (id) {
    case "names":
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE-PASTCRIME"]}
          subtitle={traslate["FORM"]["SUBTITLE"]}
        >
          <TheftInfo {...props} />
        </FormWrapper>
      );
    case "address":
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE-PASTCRIME"]}
          subtitle={traslate["FORM"]["SUBTITLE"]}
        >
          <PersonalDetails {...props} />
        </FormWrapper>
      );
    case "contact":
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE-PASTCRIME"]}
          subtitle={traslate["FORM"]["SUBTITLE"]}
        >
          <TheftDetails {...props} />
        </FormWrapper>
      );
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />; 
    default:
      return null;
  }
}
