import LoginPage from '../pages/Login.page'

describe('Login | Positive Scenarios', () => {

  it('should login successfully with valid credentials', async () => {
    // Always start fresh
    await browser.reloadSession()
    await browser.pause(3000)
    
    await LoginPage.login('standard_user', 'secret_sauce')
    
    const loggedIn = await LoginPage.isLoggedIn()
    
    console.log('Login successful:', loggedIn)
    expect(loggedIn).toBe(true)
  })

})