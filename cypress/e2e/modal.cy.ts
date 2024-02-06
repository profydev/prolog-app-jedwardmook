describe("Modal", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  context("Modal functionality", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("Check modal opens", () => {
      cy.get("button").click();
      cy.get("dialog");
    });

    it("Checks cancel functionality", () => {
      cy.get("button").click();
      cy.get("dialog");
      cy.get("button").contains("Cancel").click();
      cy.get("dialog").should("not.exist");
    });

    it("Checks Open Mail App functionality", () => {
      cy.get("button").click();
      cy.get("dialog");
      cy.get(
        "a[href='mailto:support@prolog-app.com?subject=Support%20Request:'",
      ).should("exist");
    });
  });
});
