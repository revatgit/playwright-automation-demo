// Checkout flow test for Sauce Demo
// This test navigates through the entire purchase process: login, add items,
// checkout details, and verifies order completion.

const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CheckoutPage = require('../pages/CheckoutPage');

test('Complete checkout flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addBackpackToCart();
  await inventoryPage.goToCart();

  await checkoutPage.startCheckout();
  await checkoutPage.fillDetails('Amy', 'Tester', '12345');
  await checkoutPage.finishOrder();

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

});






// Single test covering item selection and checkout
// test('Add item to cart and complete checkout', async ({ page }) => {
//     // Step 1: Open the Sauce Demo homepage
//     await page.goto('https://www.saucedemo.com/');

//     // Step 2: Perform login with valid credentials
//     await page.locator('[data-test="username"]').fill('standard_user');
//     await page.locator('[data-test="password"]').fill('secret_sauce');
//     await page.locator('[data-test="login-button"]').click();

//     // Step 3: Ensure we land on the inventory page after login
//     await expect(page).toHaveURL(/inventory/);

//     // Step 4: Add two products to the shopping cart
//    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

//     // Step 5: Navigate to cart and initiate checkout
//     await page.locator('[data-test="shopping-cart-link"]').click();
//      // Step 6: Verify cart page URL
//     await expect(page).toHaveURL(/cart/);
//     await page.locator('[data-test="checkout"]').click();


//     // Step 7: Fill in checkout information
//     await page.locator('[data-test="firstName"]').fill('Claire');
//     await page.locator('[data-test="lastName"]').fill('Smith');
//     await page.locator('[data-test="postalCode"]').fill('11001');
//     await page.locator('[data-test="continue"]').click();

//     // Step 8: Verify labels on the checkout overview page
//     await expect(page.locator('[data-test="cart-desc-label"]')).toContainText('Description');
//     await expect(page.locator('[data-test="payment-info-label"]')).toContainText('Payment Information:');
//     await expect(page.locator('[data-test="shipping-info-label"]')).toContainText('Shipping Information:');
//     await expect(page.locator('[data-test="total-label"]')).toContainText('Total: $49.66');

//     // Step 9: Submit the order and check confirmation
//     await page.locator('[data-test="finish"]').click();
//     await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
//     await page.locator('[data-test="complete-text"]').click();
//     await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');
// });