const {expect} = require('@playwright/test');
import {loginPageElements} from './pom/loginPageElements'

async function login(page, username, password) {
    await page.goto('https://www.saucedemo.com/')
    await page.locator(loginPageElements.username).fill(username)
    await page.locator(loginPageElements.password).fill(password)
    await page.locator(loginPageElements.loginButton).click()
}

async function selectCard(page, text) {
    await page.locator('[data-test="inventory-item"]').filter({ hasText: text }).locator('button').click()
}

module.exports = { login, selectCard }