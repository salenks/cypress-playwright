/// <reference types="cypress" />

describe('Test-3', () => {

    let creds;

    before(() => {
        cy.fixture('saucedemo-credentials').then(c => { creds = c })
    })

    beforeEach(() => {
        cy.login(creds.standard_user.username, creds.standard_user.password)
    })

    it('test-1', () => {
        cy.get('[id="react-burger-menu-btn"]').click()
        cy.clickSidenav('Logout')
    })
})