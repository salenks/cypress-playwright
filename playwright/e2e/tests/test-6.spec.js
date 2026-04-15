import { test, expect } from '@playwright/test';
import { login } from '../support/helpers'

test.describe('My sixth test suite', () => {

    test.beforeEach(async ({ page }) => {
        await login(page, process.env.SAUCE_USER_STANDARD || '', process.env.SAUCE_PASSWORD || '')
    });

    test('test-1', async ({ page }) => {
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')




    })


});