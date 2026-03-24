/// <reference types="cypress"/>

describe('template spec', () => {

  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('form').children().eq(0).type('standard_user')
  })
})