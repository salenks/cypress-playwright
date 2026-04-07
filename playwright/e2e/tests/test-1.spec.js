import { test, expect } from '@playwright/test';

test.describe('My first test suite', () => {

    test('test-1', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="login-button"]').click()
        await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required')
    })

    test('test-2', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').clear()
        await page.locator('[data-test="password"]').fill(process.env.SAUCE_PASSWORD || '')
        await page.locator('[data-test="login-button"]').click()
        await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required')
    })

    test('test-3', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/')
      await page.locator('[data-test="username"]').fill(process.env.SAUCE_USER_STANDARD || '')
        await page.locator('[data-test="password"]').clear()
        await page.locator('[data-test="login-button"]').click()
        await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Password is required')
    })

    test('test-4', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').fill(process.env.SAUCE_USER_STANDARD || '')
        await page.locator('[data-test="password"]').fill(process.env.SAUCE_PASSWORD || '')
        await page.locator('[data-test="login-button"]').click()
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    })

        test('test-5', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').fill(process.env.SAUCE_USER_STANDARD || '')
        await page.locator('[data-test="password"]').clear()
        await page.locator('[data-test="login-button"]').click()
        const errorContainer = page.locator('[class="error-message-container error"]')
        await expect(errorContainer).toHaveText('Epic sadface: Password is required')
        await expect(errorContainer).toHaveCSS('background-color', 'rgb(226, 35, 26)')
        await expect(errorContainer).toHaveCSS('color', 'rgb(19, 35, 34)')
    })
});