/// <reference types="cypress"/>

describe('template spec', () => {

    let creds;

    before(() => {
        cy.fixture('saucedemo-credentials').then(c => { creds = c })
    })

    it('passes', () => {
        const standard_user = creds.standard_user      // moved inside it()
        cy.login(standard_user.username, standard_user.password)
        cy.visit('/')
        cy.get('form')
            .children()
            .eq(0)
            .type(standard_user.username)              // replaced hardcoded string
    })

    it('test-2', () => {
        cy.visit('/')                                  // use baseUrl shorthand
        cy.get('[data-test="username"]').parent()
        cy.get('[class="form_group"]').eq(0)
    })

    it('test-3', () => {
        cy.visit('/')                                  // use baseUrl shorthand
        cy.get('form')
            .children()
            .first()
        cy.get('form')
            .children()
            .last()
        cy.get('form')
            .children()
            .find('input')
    })
})