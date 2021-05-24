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
          loading={10}
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
          loading={20}
        >
          <StolenItems
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
          loading={30}
        >
          <PersonalDetails
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}
            isMobile={isMobile}
          />
        </FormWrapper>
      );
    case 4:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE-PASTCRIME"]}
          subtitle={traslate["FORM"]["SUBTITLE"]}
          loading={40}
        >
          <PersonalDetails2
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}
            isMobile={isMobile}
          />
        </FormWrapper>
      );
    case 5:
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE-PASTCRIME"]}
          loading={50}
        >
          <TheftDetails
            formData={formData}
            handleNext={handleNext}
            handleBack={handleBack}
            isMobile={isMobile}
          />
        </FormWrapper>
      );
    case 6:
      return <Review formData={formData} isMobile={isMobile} />;
    case 7:
      return <Submit formData={formData} isMobile={isMobile} />;
    default:
      break;
  }
}
