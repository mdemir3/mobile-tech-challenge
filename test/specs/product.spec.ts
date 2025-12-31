import LoginPage from '../pages/Login.page'
import ProductsPage from '../pages/Products.page'
import CartPage from '../pages/Cart.page'

describe('Product & Cart Tests', () => {

  it('should login and scroll product list to bottom', async () => {
    await LoginPage.login('standard_user', 'secret_sauce')
    
    await ProductsPage.productsTitle.waitForDisplayed({ timeout: 10000 })
    
    await ProductsPage.scrollToBottom()
    
    console.log('✅ Successfully scrolled to bottom')
    
    const titleVisible = await ProductsPage.productsTitle.isDisplayed()
    expect(titleVisible).toBe(true)
  })

  it('should add item to cart and verify', async () => {
    // Fresh start
    await browser.reloadSession()
    await browser.pause(10000)
    
    await LoginPage.login('standard_user', 'secret_sauce')
    
    await ProductsPage.productsTitle.waitForDisplayed({ timeout: 10000 })
    
    const itemName = await ProductsPage.addFirstItemToCart()
    console.log('Added to cart:', itemName)
    
    await browser.pause(1500)
    
    await ProductsPage.openCart()
    
    const isOnCartPage = await CartPage.isDisplayed()
    expect(isOnCartPage).toBe(true)
    
    const cartItemName = await CartPage.getFirstItemName()
    console.log('Item in cart:', cartItemName)
    
    expect(cartItemName).toBe(itemName)
    
    console.log('✅ Item successfully added to cart!')
  })
  })