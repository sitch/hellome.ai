/// <reference types="cypress" />

const optionFeatureMap = {
  "dark-mode": {
    name: "prefers-color-scheme",
    value: "dark",
  },
  "light-mode": {
    name: "prefers-color-scheme",
    value: "light",
  },
  "reduced-animation": {
    name: "prefers-reduced-motion",
    value: "reduce",
  },
}

export type Option = keyof typeof optionFeatureMap

/**
 * Emulates browser preferences
 * @example emulate('dark-mode')
 */
export function emulate(...options: Option[]) {
  const features = options.map((option) => optionFeatureMap[option])

  Cypress.automation("remote:debugger:protocol", {
    command: "Emulation.setEmulatedMedia",
    params: {
      media: "page",
      features,
    },
  })
}

export function disableAnimationStyles() {
  cy.get("body").invoke(
    "append",
    Cypress.$(`
      <style id="__cypress-animation-disabler">
        *, *:before, *:after {
          transition-property: none !important;
          animation: none !important;
        }
      </style>
    `),
  )
}
