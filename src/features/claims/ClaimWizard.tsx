import React, { useState } from "react";
import { StepPersonal } from "./StepPersonal";
import { StepIncident } from "./StepIncident";
import { StepConfirm } from "./StepConfirm";

type FormData = {
  name: any;
  cpf: any;
  phone: any;
  email: any;
  incidentType: any;
  incidentDate: any;
  description: any;
  file: any;
};

export function ClaimWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    cpf: "",
    phone: "",
    email: "",
    incidentType: "",
    incidentDate: "",
    description: "",
    file: null,
  });

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: 24 }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            style={{
              flex: 1,
              height: 4,
              background: step <= currentStep ? "#6200ee" : "#e0e0e0",
              borderRadius: 2,
            }}
          />
        ))}
      </div>

      {currentStep === 1 && (
        <StepPersonal
          formData={formData}
          setFormData={setFormData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 2 && (
        <StepIncident
          formData={formData}
          setFormData={setFormData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 3 && (
        <StepConfirm
          formData={formData}
          setFormData={setFormData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
    </div>
  );
}
