class InventoryPage {

  constructor(page) {
    this.page = page;
    this.backpack = '#add-to-cart-sauce-labs-backpack';
    this.cart = '.shopping_cart_link';
  }

  async addBackpackToCart() {
    await this.page.click(this.backpack);
  }

  async goToCart() {
    await this.page.click(this.cart);
  }

}

module.exports = InventoryPage;