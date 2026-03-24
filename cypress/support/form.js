import { checkoutPageElements } from "../support/POM/inventory/checkoutPageElements.js";

Cypress.Commands.add('formFill', (...arg) => {
    cy.get(checkoutPageElements.firstName).type(arg[0])
    cy.get(checkoutPageElements.lastName).type(arg[1])
    cy.get(checkoutPageElements.postalCode).type(arg[2])
    cy.get('[data-test="continue"]').click()
})