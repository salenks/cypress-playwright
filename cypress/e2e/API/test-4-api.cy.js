/// <reference types="cypress" />

describe('Test-1-API', () => {

    let creds;

    before(() => {
        cy.fixture('conduit-credentials').then(c => { creds = c })
    })

    beforeEach(() => {
        const userCredentials = {
            "user": {
                "email": creds.email,
                "password": creds.password
            }
        }

        const objectData = {
            "article": {
                "title": "API",
                "description": "Creating an article using API",
                "body": "This is the article.",
                "tagList": [
                    "apiTag"
                ]
            }
        }

        cy.request('POST', 'https://conduit-api.bondaracademy.com/api/users/login', userCredentials).its('body').then(res => {
            const token = res.user.token;
            cy.request({
                method: 'GET',
                url: 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0',
                headers: { 'Authorization': 'Token ' + token }
            }).then(res => {
                // console.log('articleCheck', res)
                const apiCreateArticle = res.body.articles.find(article => article.title === 'API-create')
                if (apiCreateArticle) {
                    cy.request({
                        method: 'DELETE',
                        url: `https://conduit-api.bondaracademy.com/api/articles/${apiCreateArticle.slug}`,
                        headers: { 'Authorization': 'Token ' + token }
                    }).then(res => {
                        expect(res.status).to.eq(204)
                    })
                }
            })
        })
    })
})


it('test-1', () => {


})