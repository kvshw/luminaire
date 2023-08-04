import React from "react";
import { Slider } from "@mui/material";
import getSliderStyles from "./getSliderStyles";

const PowerSaveSlider = ({ value, onChange }) => {
  return (
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
  );
};

export default PowerSaveSlider;
