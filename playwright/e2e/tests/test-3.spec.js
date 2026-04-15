import { test, expect } from '@playwright/test';
import { login, selectCard, clickButton, createForm } from '../support/helpers'
import { generateUserData } from '../support/helpers'



test.describe('My third test suite', () => {

    test.beforeEach(async ({ page }) => {
        await login(page, process.env.SAUCE_USER_STANDARD || '', process.env.SAUCE_PASSWORD || '')
    })

    test('test-1', async ({ page }) => {
        await selectCard(page, 'Sauce Labs Backpack');
        await clickButton(page, '[data-test="shopping-cart-badge"]')
        await clickButton(page, '[data-test="checkout"]')
        await createForm(page)
        await clickButton(page, '[data-test="finish"]')
        await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Complete!')
        await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!')
    });

    test('test-2', async ({ page }) => {
        await selectCard(page, 'Sauce Labs Backpack');
        await clickButton(page, '[data-test="shopping-cart-badge"]')
        await clickButton(page, '[data-test="checkout"]')
        await createForm(page)
        await clickButton(page, '[data-test="finish"]')
        await expect(page.locator('[data-test="complete-text"]')).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')

    });

    test('test-3', async ({ page }) => {
        await selectCard(page, 'Sauce Labs Backpack');
        await clickButton(page, '[data-test="shopping-cart-badge"]')
        await clickButton(page, '[data-test="checkout"]')
        await createForm(page)
        await clickButton(page, '[data-test="finish"]')
        await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Complete!')
        await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!')
        await expect(page.locator('[data-test="complete-text"]')).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        await expect(page.locator('[data-test="back-to-products"]')).toBeVisible()
        await expect(page.locator('[data-test="back-to-products"]')).toHaveText('Back Home')
    });



});