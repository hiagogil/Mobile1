const { join } = require('path');

exports.config = {
  hostname: '127.0.0.1',
  port: 4723,
  path: '/',
  specs: ['./test/specs/**/*.js'],
  framework: 'mocha',
  capabilities: [{
    'appium:platformName': 'Android',
    'appium:platformVersion': '9',
    'appium:deviceName': 'EBAC-QA',
    'appium:automationName': 'UiAutomator2',
    'appium:app': join(process.cwd(), 'app\\wdio.apk'),
    'appium:appPackage': 'com.wdiodemoapp',
    'appium:appWaitActivity': 'MainActivity',
  }],
  mochaOpts: {
    timeout: 80000,
  },
};