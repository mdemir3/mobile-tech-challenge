class CartPage {
  get cartTitle() {
    return $('//*[@text="YOUR CART"]')
  }

  get itemDescription() {
    return $('~test-Description')
  }

  // Direct TextView selector for item name in cart
  get itemNameText() {
    return $('//*[@content-desc="test-Description"]/*[@text]')
  }

  async isDisplayed() {
    try {
      await this.cartTitle.waitForDisplayed({ timeout: 10000 })
      return true
    } catch {
      return false
    }
  }

  async getFirstItemName() {
    // Wait for the description element
    await this.itemDescription.waitForDisplayed({ timeout: 5000 })
    
    // Direct approach - find TextView with text attribute inside test-Description
    const itemNameElement = await $('//*[@content-desc="test-Description"]//*[@text]')
    await itemNameElement.waitForDisplayed({ timeout: 5000 })
    
    const itemName = await itemNameElement.getText()
    console.log('Raw item name from cart:', itemName)
    
    return itemName.trim()
  }

  async getCartItemCount() {
    const items = await $$('~test-Item')
    return items.length
  }
}

export default new CartPage()