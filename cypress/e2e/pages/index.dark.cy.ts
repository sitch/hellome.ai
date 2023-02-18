/// <reference types="cypress" />

import { emulateDarkMode } from '@/cypress/commands/emulateColorScheme'
import {
  MATCH_IMAGE_TEST_CASE,
  SCROLLBAR_TEST_CASE,
  viewportLandscapePresets,
  viewportPortraitPresets,
} from '@/cypress/commands/matchAllViewportImages'

context('<Index /> (dark)', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        emulateDarkMode()
      },
    })
    cy.waitUntil(() => cy.get('body').should('not.have.class', 'loading'))
    cy.waitUntil(() => cy.contains('Request Access'))
    // cy.wait(200)
  })

  it('displays the brand logo text correct color', () => {
    cy.get('[data-cy=brand-logo-hello]').should(
      'have.css',
      'color',
      'rgb(255, 255, 255)'
    )
  })

  context('portrait', () => {
    viewportPortraitPresets().forEach(MATCH_IMAGE_TEST_CASE)
    viewportPortraitPresets().forEach(SCROLLBAR_TEST_CASE)
  })

  context('landscape', () => {
    viewportLandscapePresets().forEach(MATCH_IMAGE_TEST_CASE)
    viewportLandscapePresets().forEach(SCROLLBAR_TEST_CASE)
  })
})
