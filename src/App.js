import React, { useState } from "react";
import "./App.css";
import { Slider } from "@mui/material";
import Button from "@mui/material/Button";

const valueBreakSteps = 21;

const valueMappings = {
  0: 0,
  1: 1,
};

for (let i = 2; i <= valueBreakSteps; i++) {
  valueMappings[i] = (i - 1) * 5;

  if (valueMappings[i] > 100) {
    valueMappings[i] = 100;
  }
}

function App() {
  const [sliderValue, setFirstSliderValue] = useState(17);
  const [secondSliderValue, setSecondSliderValue] = useState(5);
  const [thirdSliderValue, setThirdSliderValue] = useState(0);
  const [appliedValues, setAppliedValues] = useState(null);
  const [changesApplied, setChangesApplied] = useState(false);

  const handleSliderChange = (event, newValue) => {
    setFirstSliderValue(newValue);

    if (newValue < secondSliderValue) {
      setSecondSliderValue(newValue);
    }

    if (newValue < thirdSliderValue) {
      setThirdSliderValue(newValue);
    }
  };

  const handleSecondSliderChange = (event, newValue) => {
    setSecondSliderValue(newValue);

    if (newValue > sliderValue) {
      setFirstSliderValue(newValue);
    }

    if (newValue < thirdSliderValue) {
      setThirdSliderValue(newValue);
    }
  };

  const handleThirdSliderChange = (event, newValue) => {
    setThirdSliderValue(newValue);

    if (newValue > sliderValue) {
      setFirstSliderValue(newValue);
    }

    if (newValue > secondSliderValue) {
      setSecondSliderValue(newValue);
    }
  };

  const mappedValue = valueMappings[sliderValue];

  const handleApplyClick = () => {
    // Save the applied values
    const levels = {
      occupied: mappedValue,
      powerSave: valueMappings[secondSliderValue],
      minimum: valueMappings[thirdSliderValue],
    };
    setAppliedValues(levels);
    setChangesApplied(true);
  };

  const handleCancelClick = () => {
    // Clear the applied values and indicate that changes were canceled
    setAppliedValues(null);
    setChangesApplied(true);
  };

  return (
    <div className="App">
      <div className="grid h-[100vmin] items-center">
        <div className="grid justify-center ">
          <div className="w-[350px] border-2 p-4 grid justify-center">
            <h3 className="text-xl font-bold text-left mb-3">Edit Levels</h3>
            <div>
              <div className="w-[300px] grid grid-cols-2">
                <span className="text-left font-semibold">Occupied</span>
                <span className="text-right text-[#ba122b] font-semibold">
                  {mappedValue}%
                </span>
              </div>
              <div>
                <Slider
                  value={sliderValue}
                  min={0}
                  max={valueBreakSteps}
                  step={1}
                  onChange={handleSliderChange}
                />
              </div>
              <div className="w-[300px] grid grid-cols-2">
                <span className="text-left font-semibold">Power save</span>
                <span className="text-right text-[#ba122b] font-semibold">
                  {valueMappings[secondSliderValue]}%
                </span>
              </div>
              <div>
                <Slider
                  value={secondSliderValue}
                  min={0}
                  max={valueBreakSteps}
                  step={1}
                  onChange={handleSecondSliderChange}
                />
              </div>
              <div className="w-[300px] grid grid-cols-2">
                <span className="text-left font-semibold">Minimum</span>
                <span className="text-right text-[#ba122b] font-semibold">
                  {valueMappings[thirdSliderValue]}%
                </span>
              </div>
              <div>
                <Slider
                  value={thirdSliderValue}
                  min={0}
                  max={valueBreakSteps}
                  step={1}
                  onChange={handleThirdSliderChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center justify-center mt-4">
              <div>
                <Button
                  className="cancel-button"
                  variant="contained"
                  size="small"
                  onClick={handleCancelClick}
                >
                  Cancel
                </Button>
              </div>
              <div>
                <Button
                  className="apply-button"
                  variant="contained"
                  size="small"
                  onClick={handleApplyClick}
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[15vh]">
            {changesApplied && (
              <div className="text-center mt-3">
                {appliedValues ? (
                  <>
                    <p className="font-bold">Applied Levels:</p>
                    <span>
                      <p>Occupied: {appliedValues.occupied}% </p>
                      <p>Power Save: {appliedValues.powerSave}% </p>
                      <p>Minimum: {appliedValues.minimum}% </p>
                    </span>
                  </>
                ) : (
                  <p>Changes have been canceled.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
