/// <reference types="cypress" />


describe('Test-3-API', () => {

    let creds;

    before(() => {
        cy.fixture('conduit-credentials').then(c => { creds = c })
    })

    it('test-1', () => {

        const userCredentials = {
            "user": {
                "email": creds.email,
                "password": creds.password
            }
        }

        cy.request('POST', 'https://conduit-api.bondaracademy.com/api/users/login', userCredentials).its('body').then(body => {
            console.log(body)

        })
    })
})