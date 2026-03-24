/// <reference types="cypress"/>

import { loginPageElements } from "../support/POM/login/loginPageElements.js";
import { inventoryPageElements } from "../support/POM/inventory/inventoryPageElements.js";
import { checkoutPageElements } from "../support/POM/inventory/checkoutPageElements.js";


describe('Test-2', () => {

    before(() => {
        cy.log('Before all tests')
    })

    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce')
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

        cy.get('[data-test="checkout"]').click()

        cy.formFill('Ivan', 'Ivanovic', '11000')
        cy.get('[data-test="finish"]').click()

        cy.get('[data-test="title"]').should('have.text', 'Checkout: Complete!')
    })


    it('test-2', () => {


        cy.addToCart('Sauce Labs Bike Light')
        cy.cardBadgeClick()

        cy.get('[data-test="checkout"]').click()

        cy.formFill('Ivan', 'Ivanovic', '11000')
        cy.get('[data-test="finish"]').click()

        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
    })

    it('test-3', () => {


        cy.addToCart('Sauce Labs Bike Light')
        cy.cardBadgeClick()

        cy.get('[data-test="checkout"]').click()

        cy.formFill('Ivan', 'Ivanovic', '11000')
        cy.get('[data-test="finish"]').click()

        cy.get('[data-test="complete-text"]').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    })

    it('test-4', () => {

        cy.addToCart('Sauce Labs Bike Light')
        cy.cardBadgeClick()

        cy.get('[data-test="checkout"]').click()

        cy.formFill('Ivan', 'Ivanovic', '11000')
        cy.get('[data-test="finish"]').click()

        cy.get('[data-test="back-to-products"]').click()

        cy.url().should('include', '/inventory.html')
    })
})