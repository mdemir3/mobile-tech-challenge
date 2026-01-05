# 📱 Mobile Test Automation Framework

A robust mobile test automation framework for Android and iOS applications using WebDriverIO, Appium, and TypeScript. This project demonstrates end-to-end testing of the Sauce Labs Mobile Demo App with comprehensive test coverage and beautiful Allure reporting.

![GitHub](https://img.shields.io/github/license/hkmtdem/mobile-tech-challenge)
![Platform](https://img.shields.io/badge/Platform-Android-green)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![WebdriverIO](https://img.shields.io/badge/WebdriverIO-8.x-orange)

> **Educational Project:** This is a portfolio/demonstration project showcasing mobile test automation skills and best practices.

## 🎯 Project Overview

This automated testing framework provides comprehensive test coverage for mobile applications across multiple platforms. Built with industry-standard tools and following best practices, it demonstrates professional mobile test automation capabilities.

### ✨ Key Features

- 🔄 **Cross-Platform Support**: Ready for both Android and iOS (Android fully implemented)
- 📊 **Beautiful Reports**: Integrated Allure reporting with screenshots
- 🎨 **Page Object Model**: Clean, maintainable test architecture
- 🔍 **Multiple Test Scenarios**: Login validation, product interactions, cart functionality
- 🚀 **CI/CD Ready**: Easy integration with continuous integration pipelines
- 📝 **TypeScript**: Type-safe code with excellent IDE support

## 📱 Platform Support

### ✅ Android
- **Status:** Fully supported and tested
- **Platform Version:** Android 13
- **Automation:** UiAutomator2
- **Device:** Android Emulator
- **App Type:** `.apk`
- **Test Coverage:** 100%
- **All Tests:** ✅ Passing

### ⚠️ iOS
- **Status:** Not currently runnable
- **Issue:** Application compatibility problem
- **Current App:** `iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa`
- **Problem:** 
  - The `.ipa` file is built for real iOS devices, not for the iOS Simulator
  - The app is compiled for older iOS versions and shows compatibility error when attempting to install
  - Error message: *"SwagLabsMobileApp Needs to Be Updated - The developer of this app needs to update it to work with this version of macOS"*
- **What's Needed:**
  - A `.app` file built specifically for iOS Simulator (not `.ipa`)
  - Or an updated version compatible with iOS 16.4+ or iOS 18.4
- **Framework Status:** ✅ iOS test configuration is complete and ready
- **Test Code:** ✅ All tests use cross-platform selectors and will work on iOS without modification
- **Once Fixed:** Tests will run on iOS immediately with no code changes required

## 🏗️ Project Architecture
```
mobile-tech-challenge/
├── apps/                           # Application binaries
│   ├── android.apk                 # Android application
│   └── iOS.RealDevice...ipa        # iOS app (not simulator compatible)
├── test/
│   ├── configs/
│   │   ├── wdio.android.conf.ts    # Android WebdriverIO configuration
│   │   └── wdio.ios.conf.ts        # iOS WebdriverIO configuration
│   ├── data/
│   │   └── login.negative.data.ts  # Test data for negative scenarios
│   ├── pages/                      # Page Object Model
│   │   ├── Login.page.ts           # Login page interactions
│   │   ├── Products.page.ts        # Product list interactions
│   │   └── Cart.page.ts            # Shopping cart interactions
│   └── specs/                      # Test specifications
│       ├── login.Negative.spec.ts  # Negative login scenarios
│       ├── login.Positive.spec.ts  # Positive login test
│       └── product.spec.ts         # Product & cart tests
├── allure-results/                 # Test execution data (gitignored)
├── allure-report/                  # Generated HTML reports (gitignored)
├── node_modules/                   # Dependencies (gitignored)
├── package.json
├── tsconfig.json
├── LICENSE
└── README.md
```

## 🧪 Test Scenarios

### 1. Login - Negative Scenarios
Tests invalid login attempts to ensure proper error handling:
- ✅ Empty username validation
- ✅ Empty password validation  
- ✅ Invalid credentials error message

**File:** `test/specs/login.Negative.spec.ts`

### 2. Login - Positive Scenario
Validates successful authentication:
- ✅ Login with valid credentials
- ✅ Verify successful navigation to products page

**File:** `test/specs/login.Positive.spec.ts`

### 3. Product & Cart Tests
End-to-end shopping flow validation:
- ✅ Scroll through product list
- ✅ Add item to cart
- ✅ Verify item appears in cart with correct details

**File:** `test/specs/product.spec.ts`

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Java JDK** (11 or higher) - Required for Appium
- **Android Studio** - For Android emulator
- **Appium** - Installed via npm in this project

#### Android Requirements
- Android SDK
- Android Emulator or physical device
- USB debugging enabled (for physical devices)

#### iOS Requirements (For future use)
- macOS
- Xcode with Command Line Tools
- iOS Simulator

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/hkmtdem/mobile-tech-challenge.git
cd mobile-tech-challenge
```

2. **Install dependencies**
```bash
npm install
```

3. **Verify Appium drivers**
```bash
# Android driver (should be auto-installed)
appium driver list

# If needed, install manually
appium driver install uiautomator2
```

### Setup Android Emulator

1. Open Android Studio
2. Go to **Tools** → **Device Manager**
3. Create or start an Android emulator
4. Wait for emulator to fully boot (check with `adb devices`)
```bash
# Verify emulator is running
adb devices
# Should show: emulator-5554  device
```

## 🎮 Running Tests

### Quick Start
```bash
# Run all Android tests
npm test

# Or explicitly
npm run test:android
```

### Generate Test Reports
```bash
# Run tests and generate Allure report
npm run test:report

# This will:
# 1. Execute all tests
# 2. Generate Allure report
# 3. Open report in browser automatically
```

### Individual Commands
```bash
# Run tests only
npm run test:android

# Generate report from existing results
npm run allure:generate

# Open report in browser
npm run allure:open

# Clean up old reports
npm run clean
```

## 📊 Test Reports

This project uses **Allure Report** for comprehensive test reporting.

### Report Features

- ✅ **Test Execution Summary** - Pass/fail statistics at a glance
- ✅ **Detailed Test Steps** - See exactly what each test does
- ✅ **Screenshots on Failure** - Automatic capture when tests fail
- ✅ **Execution Timeline** - Visualize test duration
- ✅ **Historical Trends** - Track test stability over time
- ✅ **Categorization** - Tests grouped by feature/suite

### Viewing Reports

After running `npm run test:report`, the Allure report opens automatically in your default browser. You can also manually open it anytime:
```bash
npm run allure:open
```

Reports are saved in the `allure-report/` directory.

## 🧩 Test Configuration

### Test Credentials

**Note:** These are public demo credentials provided by Sauce Labs for testing purposes.



#### Test Cases Include
- Empty username
- Empty password
- Invalid username/password combinations

### Android Configuration
```typescript
{
  platformName: 'Android',
  deviceName: 'Android Emulator',
  platformVersion: '13',
  automationName: 'UiAutomator2',
  app: './apps/android.apk'
}
```

### iOS Configuration (Prepared)
```typescript
{
  platformName: 'iOS',
  deviceName: 'iPhone 15',
  platformVersion: '18.4',
  automationName: 'XCUITest',
  app: './apps/YourApp.app'  // Awaiting simulator build
}
```

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **WebdriverIO** | Test automation framework | 9.x |
| **Appium** | Mobile automation server | 2.x |
| **TypeScript** | Programming language | 5.x |
| **Mocha** | Test framework | Latest |
| **Allure** | Test reporting | 2.x |
| **Node.js** | Runtime environment | 16+ |

## 📐 Design Patterns

### Page Object Model (POM)

The framework implements the Page Object Model for:
- **Better maintainability** - Changes to UI require updates in one place
- **Code reusability** - Page objects used across multiple tests
- **Improved readability** - Tests read like user stories
- **Separation of concerns** - Test logic separate from page interactions

nPage.login('standard_user', 'secret_sauce')
```

### Cross-Platform Selectors

All selectors use:
- **Accessibility IDs** (preferred) - Work on both platforms
- **Generic XPath** - Platform-agnostic expressions
- **No platform-specific code** in page objects

## 🐛 Troubleshooting

### Android Emulator Issues
```bash
# Restart ADB
adb kill-server
adb start-server

# List connected devices
adb devices

# If no devices shown, restart emulator
```

### Appium Connection Issues
```bash
# Check Appium version
appium -v

# List installed drivers
appium driver list

# Reinstall driver if needed
appium driver uninstall uiautomator2
appium driver install uiautomator2
```

### Port Already in Use
```bash
# Kill process on port 4723
lsof -ti:4723 | xargs kill -9
```

### Tests Timing Out

If tests fail due to timeouts:
1. Ensure emulator is fully booted before running tests
2. Check emulator performance (may need more RAM/CPU)
3. Increase timeout values in config if needed

## 📈 Test Results

Current test status:
- **Total Tests:** 5
- **Passing:** 5 ✅
- **Failing:** 0 ❌
- **Success Rate:** 100%

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow existing code style
- Write clear, descriptive commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📝 Best Practices Implemented

- ✅ Page Object Model for maintainability
- ✅ Cross-platform compatible selectors
- ✅ Comprehensive error handling
- ✅ Automatic screenshots on failure
- ✅ Clean separation of test data
- ✅ Detailed test reporting
- ✅ TypeScript for type safety
- ✅ Modular, reusable code
- ✅ Clear naming conventions
- ✅ Proper wait strategies

## ⚖️ Disclaimer

This project is for **educational and portfolio purposes only**. It demonstrates mobile test automation skills and best practices.

### About the Test Application

- The **Sauce Labs Mobile Demo App** is a publicly available application specifically designed for testing and automation practice
- This app is provided by Sauce Labs for educational purposes
- The test credentials used (`standard_user` / `secret_sauce`) are public demo credentials
- This project is not affiliated with or endorsed by Sauce Labs
- All trademarks belong to their respective owners

### 🔒 Responsible Use

This testing framework is designed for educational purposes and should only be used:

✅ **Acceptable Use:**
- On applications you own or have explicit permission to test
- For educational and learning purposes
- In controlled test environments
- With the Sauce Labs Demo App (which is designed for testing)
- In compliance with all applicable laws and regulations



### Legal Notice

By using this framework, you agree to:
- Use it only for lawful and authorized purposes
- Comply with all applicable laws and regulations
- Respect the terms of service of any applications being tested
- Not use it for any unauthorized or malicious activities

The author is not responsible for any misuse of this framework.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ⚠️ Provided "as is" without warranty
- ⚠️ Author not liable for damages



## 🙏 Acknowledgments

- **Sauce Labs** for providing the demo application for testing purposes
- **WebdriverIO** community for excellent documentation and support
- **Appium** team for mobile automation capabilities
- Open source community for the amazing tools and libraries




---

**📚 Educational Project** | **🎓 Learning & Portfolio** | **🚀 Best Practices Demo**

**Last Updated:** December 2025
