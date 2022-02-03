/// <reference types="cypress" />

const thomas = {
  username: "thomas",
  password: "123456"
};
const previewImgsClass = "*[class^=makeStyles-previewImg-]";
const fixtureImg = "mountain.jpg";

describe("Feature: Sending Images", () => {
  it("shows image preview on file upload", () => {
    cy.login(thomas.username, thomas.password);

    cy.get("input[name=search]").type("santiago");
    cy.contains("santiago").click();

    // check a singular attachment
    cy.get("input[name=file]").attachFile(fixtureImg);
    cy.get(previewImgsClass).should("have.length", 1);

    // check multiple attachments uploaded one after another
    cy.get("input[name=file]").attachFile(fixtureImg);
    cy.get(previewImgsClass).should("have.length", 2);

    // check multiple attachments uploaded at the same time
    cy.get("input[name=file]").attachFile([fixtureImg, fixtureImg]);
    cy.get(previewImgsClass).should("have.length", 4);
  });

  it("sends image attachments", () => {
    cy.reload();
    cy.login(thomas.username, thomas.password);
  });
});
