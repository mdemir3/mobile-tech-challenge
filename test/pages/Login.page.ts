class LoginPage {
  get screen() {
    return $('~test-Login')
  }

  get usernameInput() {
    return $('~test-Username')
  }

  get passwordInput() {
    return $('~test-Password')
  }

  get loginButton() {
    return $('~test-LOGIN')
  }

  get errorMessage() {
    return $('~test-Error message')
  }

  async getErrorText() {
    await this.errorMessage.waitForDisplayed({ timeout: 10000 })
    
    // Try to get text from children using XPath
    const textElement = await $('//*[@content-desc="test-Error message"]//*')
    const text = await textElement.getText()
    
    if (text && text.trim()) {
      return text.trim()
    }
    
    throw new Error('Could not find error message text')
  }

  async login(username: string, password: string) {
    await this.screen.waitForDisplayed({ timeout: 30000 })
    await this.usernameInput.setValue(username)
    await this.passwordInput.setValue(password)
    await this.loginButton.click()
  }
   async isLoggedIn() {
    try {
      await this.screen.waitForDisplayed({ 
        timeout: 10000, 
        reverse: true 
      })
      return true
    } catch {
      return false
    }
}
}

export default new LoginPage()