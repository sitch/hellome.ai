/// <reference types="cypress" />

import { emulateDarkMode } from '@/cypress/commands/viewport'

context('<Index /> (dark-mode)', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        emulateDarkMode()
      },
    })
  })

  it('displays the brand logo text correct color', () => {
    cy.get('[data-cy=brand-logo-hello]').should(
      'have.css',
      'color',
      'rgb(255, 255, 255)'
    )
  })

  it('matchAllViewportImages', () => {
    cy.matchAllViewportImages()
  })
})
