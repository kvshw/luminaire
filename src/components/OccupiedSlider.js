import React from "react";
import { Slider } from "@mui/material";
import getSliderStyles from "./getSliderStyles";

const OccupiedSlider = ({ value, onChange, mappedValueOccupied }) => {
  return (
    <>
      <div className="w-[300px] grid grid-cols-2">
        <span className="text-left font-semibold">Occupied</span>
        <span
          className="text-right text-[#ba122b] font-semibold"
          data-testid="mappedValueOccupied"
        >
          {mappedValueOccupied}%
        </span>
      </div>
      <div>
        <Slider
          data-cy="occupied-slider-data"
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

export default OccupiedSlider;
