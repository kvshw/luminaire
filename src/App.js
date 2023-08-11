import React, { useState } from "react";
import "./App.css";
// import { Slider } from "@mui/material";
import Button from "@mui/material/Button";
import PowerSaveSlider from "./components/PowerSaveSlider";
import MinimumSlider from "./components/MinimumSlider";
import OccupiedSlider from "./components/OccupiedSlider";

const valueBreakSteps = 21;

const valueMappings = {
  0: 0,
  1: 1,
};

for (let i = 2; i <= valueBreakSteps; i++) {
  valueMappings[i] = (i - 1) * 5;
}

const firstValueToFind = 80;
const eightyPositionFound = Object.keys(valueMappings).findIndex(
  (key) => valueMappings[key] === firstValueToFind
);
const secondValueToFind = 20;
const TwentyPositionFound = Object.keys(valueMappings).findIndex(
  (key) => valueMappings[key] === secondValueToFind
);

function App() {
  const [occupiedSliderValue, setOccupiedSliderValue] =
    useState(eightyPositionFound);
  const [powerSaveSliderValue, setPowerSaveSliderValue] =
    useState(TwentyPositionFound);
  const [minimumSliderValue, setMinimumSliderValue] = useState(0);
  const [appliedValues, setAppliedValues] = useState(null);
  const [changesApplied, setChangesApplied] = useState(false);

  const handleFirstSliderChange = (event, newValue) => {
    setOccupiedSliderValue(newValue);

    if (newValue < powerSaveSliderValue) {
      setPowerSaveSliderValue(newValue);
    }

    if (newValue < minimumSliderValue) {
      setMinimumSliderValue(newValue);
    }
  };

  const handleSecondSliderChange = (event, newValue) => {
    setPowerSaveSliderValue(newValue);

    if (newValue > occupiedSliderValue) {
      setOccupiedSliderValue(newValue);
    }

    if (newValue < minimumSliderValue) {
      setMinimumSliderValue(newValue);
    }
  };

  const handleThirdSliderChange = (event, newValue) => {
    setMinimumSliderValue(newValue);

    if (newValue > occupiedSliderValue) {
      setOccupiedSliderValue(newValue);
    }

    if (newValue > powerSaveSliderValue) {
      setPowerSaveSliderValue(newValue);
    }
  };

  const mappedValueOccupied = valueMappings[occupiedSliderValue];
  const mappedValuePowerSave = valueMappings[powerSaveSliderValue];
  const mappedValueMinimum = valueMappings[minimumSliderValue];

  const handleApplyClick = () => {
    // Save the applied values
    const levels = {
      occupied: mappedValueOccupied,
      powerSave: mappedValuePowerSave,
      minimum: mappedValueMinimum,
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
      <div className="grid h-[100vh] items-center md:h-[100vmin] overflow-y-hidden justify-center">
        <div className="grid justify-center  md:mt-0">
          <div className="w-[95vw] border-2 p-4 grid justify-center md:w-[350px]">
            <h3 className="text-xl font-bold text-left mb-3">Edit Levels</h3>
            <div>
              <div>
                <OccupiedSlider
                  id="occupied-slider"
                  data-cy="occupied-slider"
                  value={occupiedSliderValue}
                  onChange={handleFirstSliderChange}
                  mappedValueOccupied={mappedValueOccupied}
                />
              </div>

              <div>
                <PowerSaveSlider
                  value={powerSaveSliderValue}
                  onChange={handleSecondSliderChange}
                  mappedValuePowerSave={mappedValuePowerSave}
                />
              </div>

              <div>
                <MinimumSlider
                  value={minimumSliderValue}
                  onChange={handleThirdSliderChange}
                  mappedValueMinimum={mappedValueMinimum}
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
