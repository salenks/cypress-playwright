/// <reference types="cypress"/>
import { loginPageElements } from "../../support/POM/login/loginPageElements.js";



describe('Login Page', () => {

    var url = 'https://www.saucedemo.com/'
    it('Get url ...', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'https://www.saucedemo.com/')
    })

    it('Login button..', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get(loginPageElements.loginButton).click()
        cy.get(loginPageElements.errorMessage).should('have.text', 'Epic sadface: Username is required')
        cy.get(loginPageElements.errorButton).click()
    })

    it('Test1', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get(loginPageElements.username).clear()
        cy.get(loginPageElements.password).type('secret_sauce')
        cy.get(loginPageElements.loginButton).click()
        cy.get(loginPageElements.errorMessage).should('have.text', 'Epic sadface: Username is required')
    })

    it('Test2', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get(loginPageElements.username).type('standard_user')
        cy.get(loginPageElements.password).clear()
        cy.get(loginPageElements.loginButton).click()
        cy.get(loginPageElements.errorMessage).should('have.text', 'Epic sadface: Password is required')
    })

    it('Test3', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get(loginPageElements.username).type('standard_user')
        cy.get(loginPageElements.password).clear()
        cy.get(loginPageElements.loginButton).click()
        cy.get(loginPageElements.errorMessageContainer)
            .should('have.text', 'Epic sadface: Password is required')
            .and('have.css', 'background-color', 'rgb(226, 35, 26)')
            .and('have.css', 'color', 'rgb(19, 35, 34)')
    })

    it('Test4', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html')
    })
})