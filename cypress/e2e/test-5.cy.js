/// <reference types="cypress"/>
import { randomCredentials } from "../support/POM/randomCredentials.js";
// import { inventoryPageElements } from "../support/POM/inventory/inventoryPageElements.js";


describe('Test-5', () => {

    let creds;

    before(() => {
        cy.fixture('saucedemo-credentials').then(c => { creds = c });
        cy.log('Before all tests')
    })

    beforeEach(() => {
        cy.login(creds.standard_user.username, creds.standard_user.password)
    })

    afterEach(() => {
        cy.log('After each test')
    })

    after(() => {
        cy.log('After all tests')
    })


    it('test-1', () => {

        cy.addToCart('Sauce Labs Bike Light')
        cy.cardBadgeClick()
        cy.checkoutClick()
        cy.formFill(randomCredentials.firstName, randomCredentials.lastName, randomCredentials.zipCode)
        cy.finishClick()
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Complete!')
    })


})