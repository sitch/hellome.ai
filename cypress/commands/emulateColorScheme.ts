/**
 * Enables dark mode via emulation.
 * @example emulateDarkMode()
 */
export function emulateDarkMode() {
  Cypress.automation('remote:debugger:protocol', {
    command: 'Emulation.setEmulatedMedia',
    params: {
      media: 'page',
      features: [
        {
          name: 'prefers-color-scheme',
          value: 'dark',
        },
        {
          name: 'prefers-reduced-motion',
          value: 'reduce',
        },
      ],
    },
  })
}

/**
 * Enables light mode via emulation.
 * @example emulateLightMode()
 */
export function emulateLightMode() {
  Cypress.automation('remote:debugger:protocol', {
    command: 'Emulation.setEmulatedMedia',
    params: {
      media: 'page',
      features: [
        {
          name: 'prefers-color-scheme',
          value: 'light',
        },
        {
          name: 'prefers-reduced-motion',
          value: 'reduce',
        },
      ],
    },
  })
}

/**
 * Enables reduced animation via emulation.
 * @example emulateReducedMotion()
 */
export function emulateReducedMotion() {
  Cypress.automation('remote:debugger:protocol', {
    command: 'Emulation.setEmulatedMedia',
    params: {
      media: 'page',
      features: [
        {
          name: 'prefers-reduced-motion',
          value: 'reduce',
        },
      ],
    },
  })
}
