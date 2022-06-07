import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {
  const [step, setStep] = useState(1);
  const renderComponent = () => {
    if (step === 1) {
      return <Step1 nextStep={nextStep} />;
    }

    if (step === 2) {
      return <Step2 nextStep={nextStep} />;
    }

    if (step === 3) {
      return <Step3 />;
    }
  };

  const nextStep = () => {
    console.log("chamou");
    setStep(step + 1);
  };

  return <div>{renderComponent()}</div>;
}

export default App;
