import React from "react";
import { Slider } from "@mui/material";
import getSliderStyles from "./getSliderStyles";

const MinimumSlider = ({ value, onChange, mappedValueMinimum }) => {
  return (
    <>
      <div className="w-[300px] grid grid-cols-2">
        <span className="text-left font-semibold">Minimum</span>
        <span className="text-right text-[#ba122b] font-semibold">
          {mappedValueMinimum}%
        </span>
      </div>
      <div>
        <Slider
          value={value}
          min={0}
          max={21} // valueBreakSteps
          step={1}
          onChange={onChange}
          sx={getSliderStyles()}
        />
      </div>
    </>
  );
};

export default MinimumSlider;
