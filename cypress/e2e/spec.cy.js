// cypress/integration/app.spec.js
/// <reference types="cypress" />

describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // Adjust the URL if your app runs on a different port or domain
  });

  it("should update slider values correctly", () => {
    // Move the first slider to position 10
    cy.get('[data-testid="first-slider"]').invoke("val", 10).trigger("change");
    cy.get('[data-testid="first-slider"]').should("have.value", "10");

    // Move the second slider to position 15
    cy.get('[data-testid="second-slider"]').invoke("val", 15).trigger("change");
    cy.get('[data-testid="second-slider"]').should("have.value", "15");

    // Move the third slider to position 5
    cy.get('[data-testid="third-slider"]').invoke("val", 5).trigger("change");
    cy.get('[data-testid="third-slider"]').should("have.value", "5");
  });

  it("should apply and cancel changes correctly", () => {
    // Move the sliders to desired positions
    cy.get('[data-testid="first-slider"]').invoke("val", 10).trigger("change");
    cy.get('[data-testid="second-slider"]').invoke("val", 15).trigger("change");
    cy.get('[data-testid="third-slider"]').invoke("val", 5).trigger("change");

    // Click the Apply button
    cy.get(".apply-button").click();

    // Verify that the applied values are displayed correctly
    cy.contains("p", "Applied Levels:")
      .should("be.visible")
      .within(() => {
        // Add { timeout: 10000 } or a longer timeout as needed to cy.contains
        cy.contains("p", "Occupied: 80%", { timeout: 10000 }).should(
          "be.visible"
        );

        cy.contains("p", "Power Save: 20%");
        cy.contains("p", "Minimum: 0%");
      });

    // Click the Cancel button
    cy.get(".cancel-button").click();

    // Verify that the changes have been canceled
    cy.contains("Changes have been canceled.").should("be.visible");
  });
});
