import { defineConfig } from 'cypress'
import { initPlugin } from '@frsource/cypress-plugin-visual-regression-diff/plugins'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      initPlugin(on, config)
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,ts,jsx,tsx}',
    excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
    // defaultCommandTimeout: 20000,
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    setupNodeEvents(on, config) {
      initPlugin(on, config)
    },
    specPattern: 'cypress/component/**/*.cy.{js,ts,jsx,tsx}',
    excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
  },
  env: {
    'cypress-react-selector': {
      root: '#__cy_root',
    },
    // cypress-plugin-visual-regression-diff
    pluginVisualRegressionUpdateImages: true,
    pluginVisualRegressionDiffConfig: { threshold: 0.01 },
    // pluginVisualRegressionCleanupUnusedImages: true,

    // forces scale factor to be set as value "1"
    // helps with screenshots being scaled 2x on high-density screens like Mac Retina
    // default: true
    // forceDeviceScaleFactor: false,
    // pluginVisualRegressionForceDeviceScaleFactor: false,
  },
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
})
