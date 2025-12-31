import type { Options } from '@wdio/types' with { 'resolution-mode': 'import' }

export const sharedConfig: Options.Testrunner = {
  runner: 'local',

  specs: [process.cwd() + '/test/specs/**/*.spec.ts'],
  maxInstances: 1,

  logLevel: 'info',

  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 2,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 180000,
  },

  reporters: ['spec'],

  services: [
    ['appium', { command: 'appium' }]
  ],

  before: async () => {
    // global hooks (if needed later)
  }
}
