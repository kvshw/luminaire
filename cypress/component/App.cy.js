import * as React from "react";
import App from "../../src/App";

describe("App.cy.js", () => {
  it("playground", () => {
    cy.mount(<App />);
    cy.contains(/Edit Levels/i).should("be.visible");
    cy.contains(/Edit Levels/i).should("be.visible");
  });
});
