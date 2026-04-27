import { test, expect } from '@playwright/test';

test.describe('My first test suite', () => {

    test('test-1', async ({ page, request }) => {

        const getArticlePromise = page.waitForResponse('**/api/articles?limit=10&offset=0*')

        await page.goto(process.env.CONDUIT_BASE_URL + '/login')
        await page.locator('[placeholder="Email"]').fill(process.env.CONDUIT_EMAIL || '')
        await page.locator('[placeholder="Password"]').fill(process.env.CONDUIT_PASSWORD || '')
        await page.locator('[class="btn btn-lg btn-primary pull-xs-right"]').click()

        await getArticlePromise;

        const userCredentials = {
            user: {
                email: process.env.CONDUIT_EMAIL || '',
                password: process.env.CONDUIT_PASSWORD || ''
            }
        }

        const objectData = {
            "article": {
                "title": "NewAPIArticlePW",
                "description": "This is a new API article",
                "body": "This is the content of the new API article",
                "tagList": [
                    "API", "Playwright", "Testing"
                ]
            }
        }

        const loginResponse = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
            data: userCredentials
        })

        const loginBody = await loginResponse.json()
        console.log('Login response body:', loginBody)
        const token = loginBody.user.token;
        console.log('Extracted token:', token)

        const createObject = await request.post('https://conduit-api.bondaracademy.com/api/articles', {
            headers: { Authorization: 'Token ' + token },
            data: objectData
        })
        expect(createObject.status()).toBe(201)
        const createObjectBody = await createObject.json()
        console.log('Create object response body:', createObjectBody)
        const slug = createObjectBody.article.slug
        console.log('Extracted slug:', slug)

        const getObject = await request.get(`https://conduit-api.bondaracademy.com/api/articles/${slug}`, {
            headers: { Authorization: 'Token ' + token }
        })
        expect(getObject.status()).toBe(200)

        const putObject = {
            "article": {
                "title": "NewAPIArticlePWput",
                "description": "This is a new updated API article",
                "body": "This is the content of the new API article, updated",
                "tagList": [
                    "API testing"
                ]
            }
        }

        const updateObject = await request.put(`https://conduit-api.bondaracademy.com/api/articles/${slug}`, {
            headers: { Authorization: 'Token ' + token },
            data: putObject
        })
        expect(updateObject.status()).toBe(200)
        const updateObjectBody = await updateObject.json()
        console.log('Update object response body:', updateObjectBody)
        const updatedSlug = updateObjectBody.article.slug
        console.log('Extracted updated slug:', updatedSlug)

        const deleteObject = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${updatedSlug}`, {
            headers: { Authorization: 'Token ' + token }
        })
        expect(deleteObject.status()).toBe(204)

        const getListOfArticles = await request.get('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0', {
            headers: { Authorization: 'Token ' + token }
        })
        
        const jsonListOfArticles = await getListOfArticles.json()
        console.log('List of articles response body:', jsonListOfArticles)
        expect(jsonListOfArticles.articles[0].slug).not.toBe('NewAPIArticlePWput')


    })
});