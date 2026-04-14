/// <reference types="cypress" />

describe('Test-4', () => {

    let creds;

    before(() => {
        cy.fixture('saucedemo-credentials').then(c => { creds = c })
    })

    beforeEach(() => {
        cy.login(creds.standard_user.username, creds.standard_user.password)
    })

    it('test-1', () => {
        cy.get('[id="react-burger-menu-btn"]').click()

        // cy.get('[class="bm-menu-wrap"]').then(elements => {
        //     cy.wrap(elements).invoke('attr', 'area-hidden').then(attr => {
        //         if (attr.includes('true')) {
        //             cy.get('[id="react-burger-menu-btn"]').click()
        //         }
        //     })
        // })

        // cy.contains('Logout').click()

        cy.clickSidenav('Logout')
    })
})