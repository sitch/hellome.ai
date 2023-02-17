/// <reference types="cypress" />

import { emulateLightMode } from '@/cypress/commands/viewport'

context('<Index /> (light-mode)', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        emulateLightMode()
      },
    })
  })

  it('displays the brand logo text correct color', () => {
    cy.get('[data-cy=brand-logo-hello]').should(
      'have.css',
      'color',
      'rgb(0, 0, 0)'
    )
  })

  it('matchAllViewportImages', () => {
    cy.matchAllViewportImages()
  })
})
