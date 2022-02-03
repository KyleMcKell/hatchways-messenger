/// <reference types="cypress" />

describe("Feature: Sending Images", () => {
  it("shows image preview on file upload", () => {
    cy.login("thomas", "123456");

    cy.get("input[name=search]").type("santiago");
    cy.contains("santiago").click();

    // check a singular attachment
    cy.get("input[name=file]").attachFile("mountain.jpg");
    cy.get("*[class^=makeStyles-previewImg-]").should("have.length", 1);

    // check multiple attachments uploaded one after another
    cy.get("input[name=file]").attachFile("mountain.jpg");
    cy.get("*[class^=makeStyles-previewImg-]").should("have.length", 2);

    // check multiple attachments uploaded at the same time
    cy.get("input[name=file]").attachFile(["mountain.jpg", "mountain.jpg"]);
    cy.get("*[class^=makeStyles-previewImg-]").should("have.length", 4);
  });
});
