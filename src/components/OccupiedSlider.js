import React from "react";
import { Slider } from "@mui/material";
import getSliderStyles from "./getSliderStyles";

const OccupiedSlider = ({ value, onChange }) => {
  return (
    <div>
      <Slider
        value={value}
        min={0}
        max={21} // valueBreakSteps
        step={1}
        onChange={onChange}
        sx={getSliderStyles()} // Use the getSliderStyles function here
      />
    </div>
  );
};

export default OccupiedSlider;
