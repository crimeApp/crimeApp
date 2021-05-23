import React, { useState } from "react";
import traslate from "../../assets/traslate/es.json";
import FormWrapper from "./FormWrapper";
import TheftInfo from "./StepsPastCrime/TheftInfo";
import PersonalDetails from "./StepsPastCrime/PersonalDetails";
import TheftDetails from "./StepsPastCrime/TheftDetails";
import Review from "./Review";
import Submit from "./Submit";

import "./Form.css";
import { isMobile } from "react-device-detect";

export default function PastCrime() {
  const formData = {
    type: "",
    time: "",
    date: ""
  };

  const [step, setStep] = useState(1);

  const handleNext = (e) => {
    setStep(step + 1);
  };

  const handleBack = (e) => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE-PASTCRIME"]}
          subtitle={traslate["FORM"]["SUBTITLE"]}
          loading={30}
        >
          <TheftInfo
            formData={formData}
            handleNext={handleNext}
            isMobile={isMobile}
          />
        </FormWrapper>
      );
    case 2:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE-PASTCRIME"]}
          subtitle={traslate["FORM"]["SUBTITLE"]}
          loading={60}
        >
          <PersonalDetails
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}
            isMobile={isMobile}
          />
        </FormWrapper>
      );
    case 3:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE-PASTCRIME"]}
          subtitle={traslate["FORM"]["SUBTITLE"]}
          loading={90}
        >
          <TheftDetails
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}
            isMobile={isMobile}
          />
        </FormWrapper>
      );
    case 4:
      return (
        <Review
          loading={100}
          formData={formData}
          handleNext={handleNext}
          handleBack={handleBack}
          isMobile={isMobile}
        />
      );
    case 5:
      return <Submit formData={formData} isMobile={isMobile} />;
    default:
      break;
  }
}
