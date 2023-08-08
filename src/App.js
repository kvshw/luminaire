import React, { useState } from "react";
import "./App.css";
import PowerSaveSlider from "./components/powerSaveSlider";
import MinimumSlider from "./components/minimumSlider";
import OccupiedSlider from "./components/occupiedSlider";
import AppliedValues from "./components/appliedValues";
import Buttons from "./components/buttons";

function App() {
  const valueBreakSteps = 21;
  // Since the first step is 0
  const totalSteps = valueBreakSteps - 1;
  const occupiedStartPercent = 80;
  const powerSaveStartPercent = 20;
  const minimumStartPercent = 0;

  const [firstSliderValue, setFirstSliderValue] = useState(
    Math.round((occupiedStartPercent / 100) * totalSteps)
  );

  const [secondSliderValue, setSecondSliderValue] = useState(
    Math.round((powerSaveStartPercent / 100) * totalSteps)
  );
  const [thirdSliderValue, setThirdSliderValue] = useState(minimumStartPercent);
  const [appliedValues, setAppliedValues] = useState(null);
  const [changesApplied, setChangesApplied] = useState(false);

  const calculateMappedValue = (position) => {
    return position <= 1 ? position : position * 5;
  };

  const handleFirstSliderChange = (event, newValue) => {
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

    if (newValue > firstSliderValue) {
      setFirstSliderValue(newValue);
    }

    if (newValue < thirdSliderValue) {
      setThirdSliderValue(newValue);
    }
  };

  const handleThirdSliderChange = (event, newValue) => {
    setThirdSliderValue(newValue);

    if (newValue > firstSliderValue) {
      setFirstSliderValue(newValue);
    }

    if (newValue > secondSliderValue) {
      setSecondSliderValue(newValue);
    }
  };

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
