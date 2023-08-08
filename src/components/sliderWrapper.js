import React from "react";
import PowerSaveSlider from "./powerSaveSlider";
import MinimumSlider from "./minimumSlider";
import OccupiedSlider from "./occupiedSlider";

function SliderWrapper({ sliderLabel, value, onChange, mappedValue }) {
  let SliderComponent;
  switch (sliderLabel) {
    case "Occupied":
      SliderComponent = OccupiedSlider;
      break;
    case "Power Save":
      SliderComponent = PowerSaveSlider;
      break;
    case "Minimum":
      SliderComponent = MinimumSlider;
      break;
    default:
      SliderComponent = null;
  }

  if (!SliderComponent) return null;

  return (
    <div>
      <h4>{sliderLabel} Slider</h4>
      <SliderComponent
        value={value}
        onChange={onChange}
        mappedValue={mappedValue}
      />
    </div>
  );
}

export default SliderWrapper;
