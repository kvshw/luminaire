import React from "react";
import { Slider } from "@mui/material";
import getSliderStyles from "./getSliderStyles";

const PowerSaveSlider = ({ value, onChange, mappedValuePowerSave }) => {
  return (
    <>
      <div className="w-[300px] grid grid-cols-2">
        <span className="text-left font-semibold">Power save</span>
        <span className="text-right text-[#ba122b] font-semibold">
          {mappedValuePowerSave}%
        </span>
      </div>
      <div>
        <Slider
          value={value}
          min={0}
          // valueBreakSteps
          max={21}
          step={1}
          onChange={onChange}
          sx={getSliderStyles()}
        />
      </div>
    </>
  );
};

export default PowerSaveSlider;
