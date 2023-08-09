import React, { useState } from "react";
import "./App.css";
import PowerSaveSlider from "./components/PowerSaveSlider";
import MinimumSlider from "./components/MinimumSlider";
import OccupiedSlider from "./components/OccupiedSlider";
import AppliedValues from "./components/appliedValues";
import Buttons from "./components/buttons";

function App() {
  const valueBreakSteps = 21;

  // Since the first step is 0
  const totalSteps = valueBreakSteps - 1;

  // Initial percentage values for sliders
  const occupiedStartPercent = 80;
  const powerSaveStartPercent = 20;
  const minimumStartPercent = 0;

  // Initialize state variables for slider values and other UI components
  const [firstSliderValue, setFirstSliderValue] = useState(
    Math.round((occupiedStartPercent / 100) * totalSteps)
  );

  const [secondSliderValue, setSecondSliderValue] = useState(
    Math.round((powerSaveStartPercent / 100) * totalSteps)
  );

  const [thirdSliderValue, setThirdSliderValue] = useState(minimumStartPercent);
  const [appliedValues, setAppliedValues] = useState(null);
  const [changesApplied, setChangesApplied] = useState(false);

  // Function to map a slider position to a calculated value
  const calculateMappedValue = (position) => {
    return position <= 1 ? position : position * 5;
  };

  // Handlers for slider value changes
  const handleFirstSliderChange = (event, newValue) => {
    setFirstSliderValue(newValue);
    // Synchronize second and third sliders
    if (newValue < secondSliderValue) {
      setSecondSliderValue(newValue);
    }

    if (newValue < thirdSliderValue) {
      setThirdSliderValue(newValue);
    }
  };

  const handleSecondSliderChange = (event, newValue) => {
    setSecondSliderValue(newValue);
    // Synchronize first and third sliders
    if (newValue > firstSliderValue) {
      setFirstSliderValue(newValue);
    }

    if (newValue < thirdSliderValue) {
      setThirdSliderValue(newValue);
    }
  };

  const handleThirdSliderChange = (event, newValue) => {
    setThirdSliderValue(newValue);
    // Synchronize first and second sliders
    if (newValue > firstSliderValue) {
      setFirstSliderValue(newValue);
    }

    if (newValue > secondSliderValue) {
      setSecondSliderValue(newValue);
    }
  };

  // Calculate mapped values for UI display
  const mappedValueOccupied = calculateMappedValue(firstSliderValue);
  const mappedValuePowerSave = calculateMappedValue(secondSliderValue);
  const mappedValueMinimum = calculateMappedValue(thirdSliderValue);

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
                  data-cy="occupied-slider"
                  value={firstSliderValue}
                  onChange={handleFirstSliderChange}
                  mappedValueOccupied={mappedValueOccupied}
                />
              </div>

              <div>
                <PowerSaveSlider
                  data-cy="occupied-slider"
                  value={secondSliderValue}
                  onChange={handleSecondSliderChange}
                  mappedValuePowerSave={mappedValuePowerSave}
                />
              </div>

              <div>
                <MinimumSlider
                  data-cy="occupied-slider"
                  value={thirdSliderValue}
                  onChange={handleThirdSliderChange}
                  mappedValueMinimum={mappedValueMinimum}
                />
              </div>
            </div>

            <Buttons
              onCancelClick={handleCancelClick}
              onApplyClick={handleApplyClick}
            />
          </div>
          <div className="h-[15vh]">
            <AppliedValues
              changesApplied={changesApplied}
              appliedValues={appliedValues}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
