import React, { useState } from "react";
import traslate from "../../assets/traslate/es.json";
import FormWrapper from "./FormWrapper";

import TheftInfo from "./StepsPastCrime/TheftInfo";
import StolenItems from "./StepsPastCrime/StolenItems";
import PersonalDetails from "./StepsPastCrime/PersonalDetails";
import PersonalDetails2 from "./StepsPastCrime/PersonalDetails2";
import TheftDetails from "./StepsPastCrime/TheftDetails";
import Review from "./Review";
import Submit from "./Submit";

import "./Form.css";

export default function PastCrime() {
  const formData = {
    type: "",
    hour: "",
    date: "",
    place_description: "",
    accompaniment: "",
    stolen_cash: "",
    stolen_items: "",
    victim_name: "",
    victim_dni: "",
    victim_gender: "",
    victim_age: "",
    victim_height: "",
    victim_clothing: "",
    victim_pyshical: "",
    thief_profile: "",
    thief_age: "",
    thief_height: "",
    thief_clothing: "",
    thief_physical: "",
    thief_complaint: false,
    thief_arrested: false,
  };

  const [step, setStep] = useState(1);

  const handleNext = (e) => {
    console.log(formData);
    setStep(step + 1);
  };

  const handleBack = (e) => {
    setStep(step - 1);
  };

  const handleEdit = (step) => {
    setStep(step);
  };

  switch (step) {
    case 1:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE-PASTCRIME"]}
          subtitle={traslate["FORM"]["SUBTITLE"]}
          loading={10}
        >
          <TheftInfo
            formData={formData}
            handleNext={handleNext}
          />
        </FormWrapper>
      );
    case 2:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE-PASTCRIME"]}
          subtitle={""}
          loading={20}
        >
          <StolenItems
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}

          />
        </FormWrapper>
      );
    case 3:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE-PASTCRIME"]}
          subtitle={""}
          loading={30}
        >
          <PersonalDetails
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}

          />
        </FormWrapper>
      );
    case 4:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE-PASTCRIME"]}
          subtitle={""}
          loading={40}
        >
          <PersonalDetails2
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}

          />
        </FormWrapper>
      );
    case 5:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE-PASTCRIME"]}
          subtitle={""}
          loading={50}
        >
          <TheftDetails
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}

          />
        </FormWrapper>
      );
    case 6:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE-PASTCRIME"]}
          subtitle={"Revise si los datos son correctos."}
          hideprogress={true}
        >
          <Review
            formData={formData}
            handleBack={handleBack}
            handleNext={handleNext}
            handleEdit={handleEdit}

          />
        </FormWrapper>
      );
    case 7:
      return (
        <FormWrapper
          title={traslate["CONFIRMATION-DIALOG"]["TITLE"]}
          subtitle={traslate["CONFIRMATION-DIALOG"]["TEXT"]}
          hideprogress={true}
        >
          <Submit formData={formData} />
        </FormWrapper>
      );
    default:
      break;
  }
}
