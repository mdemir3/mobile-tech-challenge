import LoginPage from '../pages/Login.page'
import { invalidLoginData } from '../data/login.negative.data'

describe('Login | Negative Scenarios', () => {

  beforeEach(async () => {
    await browser.reloadSession()
    await browser.pause(12000)
    await LoginPage.loginButton.waitForDisplayed({ timeout: 30000 })
  })

  invalidLoginData.forEach(({ title, username, password, expectedError }) => {
    it(`should show error for ${title}`, async () => {
      await LoginPage.login(username, password)

      const actualError = await LoginPage.getErrorText()
      console.log(`Test: ${title}, Actual: "${actualError}"`)
      
      expect(actualError).toContain(expectedError)
    })
  })

})