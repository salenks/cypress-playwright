/// <reference types="cypress"/>

describe('template spec', () => {


  const standard_user = Cypress.env('standard_user')

  it('passes', () => {
    cy.login(standard_user.username, standard_user.password)
    cy.visit('/')
    cy.get('form')
      .children()
      .eq(0)
      .type('standard_user')
  })

  it('test-2', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').parent()

    cy.get('[class="form_group"]').eq(0)
  })

  it('test-3', () => {
    cy.visit('https://www.saucedemo.com/')
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