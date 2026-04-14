// const {expect} = require('@playwright/test');
import {expect} from '@playwright/test';
import {loginPageElements} from './pom/loginPageElements'
import { faker } from '@faker-js/faker';

async function login(page, username, password) {
    await page.goto('https://www.saucedemo.com/')
    await page.locator(loginPageElements.username).fill(username)
    await page.locator(loginPageElements.password).fill(password)
    await page.locator(loginPageElements.loginButton).click()
}

async function selectCard(page, text) {
    await page.locator('[data-test="inventory-item"]').filter({ hasText: text }).locator('button').click()
}

async function clickButton(page, selector) {
    await page.locator(selector).click()
}

function generateUserData() {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        zipCode: faker.location.zipCode(),
        email: faker.internet.email()
    }
}

async function createForm(page, firstName, lastName, zipCode) {
    const user = await generateUserData();
    await page.locator('[data-test="firstName"]').fill(user.firstName);
    await page.locator('[data-test="lastName"]').fill(user.lastName);
    await page.locator('[data-test="postalCode"]').fill(user.zipCode);
    await page.locator('[data-test="continue"]').click();
}


export { login, selectCard, clickButton, generateUserData, createForm }
