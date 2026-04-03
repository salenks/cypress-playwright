/// <reference types="cypress" />


describe('Test-3', () => {

    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce')
    })
    it('test-1', () => {

        cy.get('[id="react-burger-menu-btn"]').click()

        // cy.get('[class="bm-menu-wrap"]').then( elements => {
        //     cy.wrap(elements).invoke('attr', 'aria-hidden').then(attr => {
        //         if (attr.includes('true')) {
        //             cy.get('[id="react-burger-menu-btn"]').click()
        //         }

        //     })
        // })

        // cy.contains('Logout').click()

        cy.clickSidenav('Logout')
    })
})