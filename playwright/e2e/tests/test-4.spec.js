import { test, expect } from '@playwright/test';
import { login } from '../support/helpers'

test.describe('My fourth test suite', () => {

    test.beforeEach(async ({ page }) => {
        await login(page, process.env.SAUCE_USER_STANDARD || '', process.env.SAUCE_PASSWORD || '')
    });

    test('test-1', async ({ page }) => {
        const priceList = page.locator('.inventory_item_price');
        await expect(priceList).toHaveCount(6);
        await expect(priceList.nth(0)).toHaveText('$29.99');
        await expect(priceList.nth(1)).toHaveText('$9.99');
        await expect(priceList.nth(2)).toHaveText('$15.99');
        await expect(priceList.nth(3)).toHaveText('$49.99');
        await expect(priceList.nth(4)).toHaveText('$7.99');
        await expect(priceList.nth(5)).toHaveText('$15.99');
    })

    test('test-2', async ({ page }) => {
        const priceList = page.locator('.inventory_item_price');
        const list = ['$29.99', '$9.99', '$15.99', '$49.99', '$7.99', '$15.99']
        const count = await priceList.count();

        console.log('count:', count)
        console.log('priceList:',priceList)
        console.log('list:',list)

        for(let i = 0; i < priceList.count(); i++) {
            await expect(priceList.nth(i)).toHaveText(list[i])
        }

    })

});