import { sharedConfig } from './wdio.shared.conf'
import path from 'path'

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  specs: [
    '../specs/**/*.spec.ts'
  ],

  capabilities: [
    {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': 'emulator-5554',
      'appium:app': path.resolve(process.cwd(), 'apps/android.apk'),
      'appium:appPackage': 'com.swaglabsmobileapp',
      'appium:appActivity': '.MainActivity',
      'appium:autoGrantPermissions': true,
      'appium:newCommandTimeout': 120,
    }
  ],
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false,
    }]
  ],

}
