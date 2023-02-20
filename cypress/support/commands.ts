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

// ***********************************************
// Plugins
// ***********************************************

import '@frsource/cypress-plugin-visual-regression-diff/dist/support'
import 'cypress-wait-until'

// ***********************************************
// User Commands
// ***********************************************

// import '@/cypress/commands/screenshots'

declare global {
  namespace Cypress {
    interface Chainable {
      getByData(
        selector: string,
        options?:
          | Partial<
              Cypress.Loggable &
                Cypress.Timeoutable &
                Cypress.Withinable &
                Cypress.Shadow
            >
          | undefined
      ): Chainable<JQuery<HTMLElement>>
    }
  }
}

Cypress.Commands.add('getByData', (selector, options) => {
  return cy.get(`[data-cy="${selector}"]`, options)
})

declare global {
  namespace Cypress {
    interface Chainable {
      getCaptcha(): Chainable<JQuery<HTMLElement>>
      clickCaptcha(): Chainable<JQuery<HTMLElement>>
    }
  }
}

Cypress.Commands.add('getCaptcha', () => {
  // cy.get('iframe[src*=recaptcha]')
  cy.get('iframe[title=reCAPTCHA]').its('0.contentDocument').should('exist')
})

Cypress.Commands.add('clickCaptcha', () => {
  cy.get('iframe[title=reCAPTCHA]')
    .its('0.contentDocument')
    .should((d) => d.getElementById('recaptcha-token').click())
})

declare global {
  namespace Cypress {
    interface Chainable {
      waitForPageLoad(page?: string): Chainable<void>
    }
  }
}

Cypress.Commands.add('waitForPageLoad', (page) => {
  // cy.waitUntil(() => cy.get('body').should('not.have.class', 'loading'))
  cy.get('body').should('not.have.class', 'loading')
  cy.get('#app-loading').should('not.exist')
  cy.waitForReact(4000, '#__next', 'node_modules/resq/dist/index.js')

  if (page) {
    cy.getByData(page, { timeout: 20000 }).should('exist')
  }
})
