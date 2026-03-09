// This test file contains login-related tests for the Sauce Demo application.
// It includes tests for successful login and invalid login scenarios.

import { test, expect } from '@playwright/test';

test('Login to sauce demo', async ({ page }) => {
  // Navigate to the Sauce Demo login page
  await page.goto('https://www.saucedemo.com/');

  // Verify that the page title contains "Swag Labs"
  await expect(page).toHaveTitle(/Swag Labs/);

  // Fill in the username field with a valid username
  await page.locator('[data-test="username"]').fill('standard_user');

  // Fill in the password field with the correct password
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Click the login button
  await page.locator('[data-test="login-button"]').click();

  // Verify that the inventory page title is visible after login
  await expect(page.locator('[data-test="title"]')).toBeVisible();

  // Verify that the URL contains 'inventory' indicating successful login
  await expect(page).toHaveURL(/inventory/);
});

test('Invalid Login to sauce demo', async ({ page }) => {
  // Navigate to the Sauce Demo login page
  await page.goto('https://www.saucedemo.com/');

  // Verify that the page title contains "Swag Labs"
  await expect(page).toHaveTitle(/Swag Labs/);

  // Fill in the username field with an invalid username
  await page.locator('[data-test="username"]').fill('standard');

  // Fill in the password field with an incorrect password
  await page.locator('[data-test="password"]').fill('secret');

  // Click the login button
  await page.locator('[data-test="login-button"]').click();

  // Verify that an error message is displayed for invalid credentials
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});


