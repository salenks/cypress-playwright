/// <reference types="cypress"/>


describe('Test', () => {

    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce')
    })

    it('Test-1', () => {

        cy.contains('[data-test="inventory-item"]', 'Sauce Labs Bike Light')
            .find('[data-test="inventory-item-price"]')
            .should('have.text', '$9.99')
    })

    it('Test-2', () => {

        cy.contains('[data-test="inventory-item"]', 'Sauce Labs Bike Light')
            .find('[data-test="inventory-item-desc"]')
            .should('have.text', "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.")
    })

    it('Test-3', () => {

        cy.contains('[data-test="inventory-item"]', 'Sauce Labs Bike Light')
            .find('button')
            .should('have.text', 'Add to cart')
            .and('have.css', 'background-color', 'rgb(255, 255, 255)')
            .and('have.css', 'color', 'rgb(19, 35, 34)')
            .click()
        cy.contains('[data-test="inventory-item"]', 'Sauce Labs Bike Light')
            .find('button')
            .should('have.text', 'Remove')
            .and('have.css', 'background-color', 'rgb(255, 255, 255)')
            .and('have.css', 'color', 'rgb(226, 35, 26)')
            .click()
        cy.contains('[data-test="inventory-item"]', 'Sauce Labs Bike Light')
            .find('button')
            .should('have.text', 'Add to cart')
            .and('have.css', 'background-color', 'rgb(255, 255, 255)')
            .and('have.css', 'color', 'rgb(19, 35, 34)')
    })

})