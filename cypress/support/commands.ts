/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import '@frsource/cypress-plugin-visual-regression-diff/dist/support'

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Enables dark mode via a matchMedia mock.
       * @example cy.darkMode(win)
       */
      darkMode(win: Cypress.AUTWindow): Chainable<void>
    }
  }
}

Cypress.Commands.add('darkMode', (win) => {
  cy.stub(win, 'matchMedia')
    .withArgs('(prefers-color-scheme: dark)')
    .as('dark-media-query')
    .returns({
      matches: true,
      addEventListener: () => {},
    })
})

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Enables light mode via a matchMedia mock.
       * @example cy.lightMode(win)
       */
      lightMode(win: Cypress.AUTWindow): Chainable<void>
    }
  }
}
Cypress.Commands.add('lightMode', (win) => {
  cy.stub(win, 'matchMedia')
    .withArgs('(prefers-color-scheme: dark)')
    .as('dark-media-query')
    .returns({
      matches: false,
      addEventListener: () => {},
    })
})
