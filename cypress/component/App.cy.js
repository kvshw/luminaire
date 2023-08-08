import * as React from "react";
import App from "../../src/App";

describe("App.cy.js", () => {
  it("should update sliders correctly", () => {
    cy.visit("/"); // Assuming your app's main page is accessible at "/"

    // Interact with the sliders
    cy.get("[data-cy=occupied-slider]").as("occupiedSlider");
    cy.get("@occupiedSlider")
      .trigger("mousedown")
      .trigger("mousemove", 100)
      .trigger("mouseup");
    cy.get("@occupiedSlider").should("have.attr", "aria-valuenow", "100");

    cy.get("[data-cy=powersave-slider]").as("powerSaveSlider");
    cy.get("@powerSaveSlider")
      .trigger("mousedown")
      .trigger("mousemove", 50)
      .trigger("mouseup");
    cy.get("@powerSaveSlider").should("have.attr", "aria-valuenow", "50");

    cy.get("[data-cy=minimum-slider]").as("minimumSlider");
    cy.get("@minimumSlider")
      .trigger("mousedown")
      .trigger("mousemove", 25)
      .trigger("mouseup");
    cy.get("@minimumSlider").should("have.attr", "aria-valuenow", "25");
  });
});
