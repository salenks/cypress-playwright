import { test, expect } from '@playwright/test';
const {login, selectCard} = require('../support/helpers')

test.describe('My second test suite', () => {

    test.beforeAll(async () => {
        console.log('This will run before all tests')
    })

    test.beforeEach(async ({ page }) => {
        // await page.goto('https://www.saucedemo.com/')
        // await page.locator('[data-test="username"]').fill(process.env.SAUCE_USER_STANDARD || '')
        // await page.locator('[data-test="password"]').fill(process.env.SAUCE_PASSWORD || '')
        // await page.locator('[data-test="login-button"]').click()
        await login(page, process.env.SAUCE_USER_STANDARD || '', process.env.SAUCE_PASSWORD || '')
    })

    test.afterEach(async () => {
        console.log('This will run after each test')
    })

    test.afterAll(async () => {
        console.log('This will run after all tests')
    })

    test('test-1', async ({ page }) => {
        // await page.goto('https://www.saucedemo.com/')
        // await page.locator('[data-test="username"]').fill(process.env.SAUCE_USER_STANDARD || '')
        // await page.locator('[data-test="password"]').fill(process.env.SAUCE_PASSWORD || '')
        // await page.locator('[data-test="login-button"]').click()
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        await expect(page.locator('[data-test="inventory-item"]').filter({ hasText: 'Sauce Labs Backpack' })).toBeVisible()
    })

    test('test-2', async ({ page }) => {
        // await page.goto('https://www.saucedemo.com/')
        // await page.locator('[data-test="username"]').fill(process.env.SAUCE_USER_STANDARD || '')
        // await page.locator('[data-test="password"]').fill(process.env.SAUCE_PASSWORD || '')
        // await page.locator('[data-test="login-button"]').click()
        const card = page.locator('[data-test="inventory-item"]').filter({ hasText: 'Sauce Labs Backpack' })
        await expect(card.locator('[data-test="inventory-item-price"]')).toHaveText('$29.99')
    })
    test('test-3', async ({ page }) => {
        // await page.goto('https://www.saucedemo.com/')
        // await page.locator('[data-test="username"]').fill(process.env.SAUCE_USER_STANDARD || '')
        // await page.locator('[data-test="password"]').fill(process.env.SAUCE_PASSWORD || '')
        // await page.locator('[data-test="login-button"]').click()
        const card = page.locator('[data-test="inventory-item"]').filter({ hasText: 'Sauce Labs Backpack' })
        const button = card.locator('button')

        await expect(button).toHaveText('Add to cart')
        await expect(button).toHaveCSS('background-color', 'rgb(255, 255, 255)')
        await expect(button).toHaveCSS('color', 'rgb(19, 35, 34)')
        await button.click()

        await expect(button).toHaveText('Remove')
        await expect(button).toHaveCSS('background-color', 'rgb(255, 255, 255)')
        await expect(button).toHaveCSS('color', 'rgb(226, 35, 26)')
        await button.click()

        await expect(button).toHaveText('Add to cart')
        await expect(button).toHaveCSS('background-color', 'rgb(255, 255, 255)')
        await expect(button).toHaveCSS('color', 'rgb(19, 35, 34)')
    })

});