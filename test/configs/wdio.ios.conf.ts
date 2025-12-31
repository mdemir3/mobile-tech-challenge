import { sharedConfig } from './wdio.shared.conf'
import path from 'path'

export const config: WebdriverIO.Config = {
  ...sharedConfig,

  capabilities: [
    {
      platformName: 'iOS',
      'appium:automationName': 'XCUITest',
      'appium:deviceName': 'iPhone 15',
      'appium:platformVersion': '18.4',
      'appium:app': './apps/iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa',  // Your iOS app path
      'appium:newCommandTimeout': 120,
    }
  ],
}
