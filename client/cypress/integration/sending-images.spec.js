/// <reference types="cypress" />

const thomas = {
  username: "thomas",
  password: "123456"
};
const previewImgsClass = "*[class^=makeStyles-previewImg-]";
const sentImgsClass = "*[class^=makeStyles-attachment-]";
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

  it("sends one image attachment", () => {
    cy.reload();
    cy.login(thomas.username, thomas.password);

    cy.get("input[name=search]").type("santiago");
    cy.contains("santiago").click();

    // create message with one attachment
    cy.get("input[name=file]").attachFile(fixtureImg).type("{enter}");

    // add text to make it so we can send message with cypress
    cy.get(sentImgsClass, { timeout: 10000 }).should("have.length", 1);
  });

  it("sends multiple image attachments", () => {
    cy.reload();
    cy.login(thomas.username, thomas.password);

    cy.get("input[name=search]").type("hualing");
    cy.contains("hualing").click();

    // create message with multiple attachments
    cy.get("input[name=file]")
      .attachFile([fixtureImg, fixtureImg])
      .type("{enter}");

    cy.get(sentImgsClass, { timeout: 10000 }).should("have.length", 2);
  });
});
