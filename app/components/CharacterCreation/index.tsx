"use client";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useState } from "react";

export default function CharacterCreation() {
    const [activeStep, setActiveStep] = useState<number>(0);

    const steps = ["Step 1: Basics", "Step 2: Attributes", "Step 3: Skills"];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <Step1 />;
            case 1:
                return <Step2 />;
            case 2:
                return <Step3 />;
            default:
                return <div>Unknown Step</div>;
        }
    };

    return (
        <div className="flex flex-col min-h-[97vh]">
            <h1 className="text-center mt-4">Character Creation</h1>

            <div className="flex-1 flex justify-center items-center">
                {renderStepContent(activeStep)}
            </div>
            
            <div className="w-full py-4 bg-white shadow-md flex justify-center gap-4">
                <Button 
                    variant="contained" 
                    onClick={handleBack} 
                    disabled={activeStep === 0}
                >
                    Back
                </Button>
                <span className="text-lg font-semibold">{activeStep + 1} / {steps.length}</span>
                <Button 
                    variant="contained" 
                    onClick={handleNext} 
                    disabled={activeStep === steps.length - 1}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}
