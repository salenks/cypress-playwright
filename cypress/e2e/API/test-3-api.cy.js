/// <reference types="cypress" />


describe('Test-3-API', () => {

    let creds;

    before(() => {
        cy.fixture('conduit-credentials').then(c => { creds = c })
    })


    it('test-1', () => {

        //     const userCredentials = {
        //         "user": {
        //             "email": creds.email,
        //             "password": creds.password
        //         }
        //     }

        //     cy.request('POST', 'https://conduit-api.bondaracademy.com/api/users/login', userCredentials).its('body').then(body => {
        //         console.log(body)
        //         const token = body.user.token;


        //         cy.visit('https://conduit.bondaracademy.com/api/articles/API-create-50107', {
        //             onbeforeload(win) {
        //                 win.localStorage.setItem('jwtToken', token);
        //             }

        //         })
        //     })

        cy.loginAPI(creds.email, creds.password, 'https://conduit.bondaracademy.com/article/API-create-50107')
        cy.get('h1').should('have.text', 'API-create')
        cy.get('.card-footer > .btn').should('have.text', ' Post Comment ')
        cy.get('.article-actions > app-article-meta > .article-meta > :nth-child(1) > img').should('be.visible')
    })
})