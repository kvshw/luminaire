import React, { useState } from "react";
import "./App.css";
import { Slider } from "@mui/material";
import Button from "@mui/material/Button";

const valueMappings = {
  0: 0,
  1: 1,
};

for (let i = 2; i < 22; i++) {
  valueMappings[i] = (i - 1) * 5;

  if (valueMappings[i] > 100) {
    valueMappings[i] = 100;
  }
}

function App() {
  const [sliderValue, setSliderValue] = useState(17);
  const [secondSliderValue, setSecondSliderValue] = useState(5);
  const [thirdSliderValue, setThirdSliderValue] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);

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
      setSliderValue(newValue);
    }

    if (newValue < thirdSliderValue) {
      setThirdSliderValue(newValue);
    }
  };

  const handleThirdSliderChange = (event, newValue) => {
    setThirdSliderValue(newValue);

    if (newValue > sliderValue) {
      setSliderValue(newValue);
    }

    if (newValue > secondSliderValue) {
      setSecondSliderValue(newValue);
    }
  };

  const mappedValue = valueMappings[sliderValue];

  return (
    <div className="App">
      <div className="grid h-[100vmin] items-center">
        <div className="grid justify-center ">
          <div className="w-[350px] border-2 p-4 grid justify-center">
            <h3 className="text-xl font-bold text-left mb-3">Edit Levels</h3>
            <div>
              <div className="w-[300px] grid grid-cols-2">
                <span className="text-left">Occupied</span>
                <span className="text-right">{mappedValue}%</span>
              </div>
              <div>
                <Slider
                  value={sliderValue}
                  min={0}
                  max={21}
                  step={1}
                  onChange={handleSliderChange}
                />
              </div>
              <div className="w-[300px] grid grid-cols-2">
                <span className="text-left">Power save</span>
                <span className="text-right">
                  {valueMappings[secondSliderValue]}%
                </span>
              </div>
              <div>
                <Slider
                  value={secondSliderValue}
                  min={0}
                  max={21}
                  step={1}
                  onChange={handleSecondSliderChange}
                />
              </div>
              <div className="w-[300px] grid grid-cols-2">
                <span className="text-left">Minimum</span>
                <span className="text-right">
                  {valueMappings[thirdSliderValue]}%
                </span>
              </div>
              <div>
                <Slider
                  value={thirdSliderValue}
                  min={0}
                  max={21}
                  step={1}
                  onChange={handleThirdSliderChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center justify-center">
              <div>
                <Button variant="contained" size="small">
                  Cancel
                </Button>
              </div>
              <div>
                <Button variant="contained" size="small">
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
