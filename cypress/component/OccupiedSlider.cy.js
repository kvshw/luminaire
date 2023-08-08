// import OccupiedSlider from "../../src/components/OccupiedSlider";

describe("Test the OccupiedSlider functionality", () => {
  it("should update the OccupiedSlider value", () => {
    cy.visit("/");
    cy.get("[data-cy=occupied-slider]").as("occupiedSlider");

    // Move the slider to a new value and verify the result
    cy.get("@occupiedSlider")
      .trigger("mousedown")
      .trigger("mousemove", 100)
      .trigger("mouseup");
    cy.get("@occupiedSlider").should("have.attr", "aria-valuenow", "100");
  });
});
