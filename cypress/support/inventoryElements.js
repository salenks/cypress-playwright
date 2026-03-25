import { inventoryPageElements } from "../support/POM/inventory/inventoryPageElements.js";


Cypress.Commands.add('addToCart', (cardName) => {
    cy.contains(inventoryPageElements.inventoryItem, cardName)
        .find('button')
        .click()
})

Cypress.Commands.add('cardBadgeClick', () => {
    cy.get('[data-test="shopping-cart-badge"]').click()
})

Cypress.Commands.add('checkoutClick', () => {
    cy.get('[data-test="checkout"]').click()
})