# Cypress-Playwright

This repository contains automated end-to-end tests using **Cypress** and **Playwright**.  
Tests cover web UI functionality and workflows.

---

## Prerequisites

- Node.js (v18+ recommended)  
- npm (comes with Node) or yarn  

---

## Setup

1. Clone the repository:

```bash
git clone https://github.com/salenks/cypress-playwright.git
cd cypress-playwright

2. Install dependencies:

npm install


3. Running Tests

Cypress

Open the interactive Cypress test runner:

npx cypress open

Run all tests in headless mode (CI-friendly):

npx cypress run


Playwright

Run Playwright tests in headless mode:

npx playwright test

Open Playwright test report in browser:

npx playwright show-report