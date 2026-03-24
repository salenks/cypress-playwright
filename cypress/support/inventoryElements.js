import { inventoryPageElements } from "../support/POM/inventory/inventoryPageElements.js";


Cypress.Commands.add('addToCart', (cardName) => {
    cy.contains(inventoryPageElements.inventoryItem, cardName)
        .find('button')
        .click()
})