import React from "react";
import OccupiedSlider from "./occupiedSlider";

describe("<OccupiedSlider />", () => {
  it("renders", () => {
    cy.mount(<OccupiedSlider mappedValueOccupied={80} />);
  });
});
