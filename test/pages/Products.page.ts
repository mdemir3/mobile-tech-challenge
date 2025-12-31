class ProductsPage {
  get productsTitle() {
    return $('//*[@text="PRODUCTS"]')
  }

  get productList() {
    return $('~test-PRODUCTS')
  }

  // Get all item titles, then select first one
  get allItemTitles() {
    return $$('//*[@content-desc="test-Item title"]')
  }

  // First item's Add to Cart button
  get allAddToCartButtons() {
    return $$('//*[@content-desc="test-ADD TO CART"]')
  }

  // Cart icon
  get cartIcon() {
    return $('~test-Cart')
  }

  async isDisplayed() {
    try {
      await this.productsTitle.waitForDisplayed({ timeout: 10000 })
      return true
    } catch {
      return false
    }
  }

  async scrollToBottom() {
    await this.productList.scrollIntoView({ block: 'end' })
  }

  async addFirstItemToCart() {
    // Get all item titles
    const itemTitles = await this.allItemTitles
    await itemTitles[0].waitForDisplayed({ timeout: 5000 })
    const itemName = await itemTitles[0].getText()
    console.log('Item to add:', itemName)
    
    // Get all Add to Cart buttons and click the first one
    const addButtons = await this.allAddToCartButtons
    await addButtons[0].waitForDisplayed({ timeout: 5000 })
    await addButtons[0].click()
    
    return itemName
  }

  async openCart() {
    await this.cartIcon.waitForDisplayed({ timeout: 5000 })
    await this.cartIcon.click()
  }
}

export default new ProductsPage()