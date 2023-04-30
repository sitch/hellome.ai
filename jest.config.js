// Setup env files
// const dotenv = require('dotenv')
// dotenv.config({ path: '.env.example', override: true })
// dotenv.config({ path: '.env', override: true })
// dotenv.config({ path: '.env.local', override: true })
// dotenv.config({ path: '.env.test', override: true })

// const nextJest = require("next/jest")
const nextJest = require("next/dist/build/jest/jest").default

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
})

// Add any custom config to be passed to Jest
/**
 * @typedef {import('jest').Config}
 **/
const customJestConfig = {
  globalSetup: "<rootDir>/__tests__/setupEnv.ts",

  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],

  // If you're using [Module Path Aliases](https://nextjs.org/docs/advanced-features/module-path-aliases),
  // you will have to add the moduleNameMapper in order for jest to resolve your absolute paths.
  // The paths have to be matching with the paths option within the compilerOptions in the tsconfig.json
  // For example:
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/$1",
    "#/(.*)$": "<rootDir>/cypress/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: [
    // Setup
    "<rootDir>/__tests__/setupEnv.ts",

    // Cypress
    "<rootDir>/cypress/",

    // Fixtures
    "<rootDir>/__tests__/components/vision/human/fixtures.ts",
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = createJestConfig(customJestConfig)
