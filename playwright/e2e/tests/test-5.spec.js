import { test, expect } from '@playwright/test';
import { login } from '../support/helpers'

test.describe('My first test suite', () => {

    test.beforeEach(async ({ page }) => {
        await login(page, process.env.SAUCE_USER_STANDARD || '', process.env.SAUCE_PASSWORD || '')
    });

    test('test-1', async ({ page }) => {
        await expect(page.locator('[id="react-burger-menu-btn"]')).click()

        const menuWrap = page.locator('[class="bm-menu-wrap"]')
        const areaHidden = await menuWrap.getAttribute('aria-hidden')
        if (areaHidden === 'true') {
            await page.locator('[id="react-burger-menu-btn"]').click()
        }

        await page.getByText('Logout', { exact: true }).click()


    })


});