// import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


// Given("User is on the login page", () => {
//     cy.visit("/");
// });

// When("User enters username {string} and password {string}", (username, password) => {
//     cy.get("#user-name").type(username);
//     cy.get("#password").type(password);
//     cy.get("#login-button").click();
// });
// Then ("User should be logged in successfully", () => {
//     cy.url().should("include", "/inventory.html");
//     cy.get(".inventory_list").should("be.visible");
//     cy.get(".inventory_item").should("have.length.greaterThan", 0);
//     });

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("User is on the login page", () => {
    cy.visit("/");
});

When("User enters username {string} and password {string}", (username, password) => {
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
});

When("User enters locked account username {string} and password {string}", (username, password) => {
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
});

When("User clicks on the login button", () => {
    cy.get("#login-button").click();
});

Then("User should be logged in successfully", () => {
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("be.visible");
    cy.get(".inventory_item").should("have.length.greaterThan", 0);
});

Then("User should see an error message {string}", (errorMessage) => {
    cy.get("[data-test='error']").should("be.visible")
        .and("contain", errorMessage);
});

Then("User should see an error message indicating account is locked {string}", (errorMessage) => {
    cy.get("[data-test='error']").should("be.visible")
        .and("contain", errorMessage);
});
// Then("User should see an error message indicating account is locked {string}", (errorMessage) => {
//     cy.get("[data-test='error']").then(($el) => {
//         cy.log("Actual text: " + $el.text());
//     });
//     cy.get("[data-test='error']").should("be.visible")
//         .and("contain", errorMessage);
// });