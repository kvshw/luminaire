describe("Luminaire Testing", () => {
  it("Luminaire successfully loads", () => {
    cy.visit("/");
    cy.wait(1000);

    cy.contains("Edit Levels");
    cy.wait(1000);

    cy.contains("Apply").click();
    cy.wait(1000);

    cy.contains("Cancel").click();
  });
});
