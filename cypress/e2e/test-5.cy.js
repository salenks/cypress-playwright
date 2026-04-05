/// <reference types="cypress"/>

import { loginPageElements } from "../support/POM/login/loginPageElements.js";
// import { inventoryPageElements } from "../support/POM/inventory/inventoryPageElements.js";
import { faker } from '@faker-js/faker';

let creds;

before(() => {
    cy.fixture('saucedemo-credentials').then(c => { creds = c })
})

describe('Test-5', () => {

    before(() => {
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
        cy.formFill(faker.person.firstName(), faker.person.lastName(), faker.location.zipCode())
        cy.finishClick()
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Complete!')
    })


})