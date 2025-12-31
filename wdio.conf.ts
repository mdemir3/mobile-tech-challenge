export const config = {
  runner: 'local',
  tsConfigPath: './tsconfig.json',
  port: 4723,
  specs: ['./test/specs/**/*.spec.ts'],
  maxInstances: 1,
  
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Emulator 5554',
    'appium:platformVersion': '13',
    'appium:automationName': 'UiAutomator2',
    'appium:app': './apps/android.apk',
    'appium:noReset': false,  // Allow app reset
    'appium:fullReset': false  // Don't uninstall between tests
  }],
  
  services: ['appium']
}