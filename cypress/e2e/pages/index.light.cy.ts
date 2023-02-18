/// <reference types="cypress" />

import { emulateLightMode } from '@/cypress/commands/emulateColorScheme'
import {
  MATCH_IMAGE_TEST_CASE,
  SCROLLBAR_TEST_CASE,
  viewportLandscapePresets,
  viewportPortraitPresets,
} from '@/cypress/commands/matchAllViewportImages'

context('<Index /> (light)', () => {
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

  context('portrait', () => {
    viewportPortraitPresets().forEach(SCROLLBAR_TEST_CASE)
    viewportPortraitPresets().forEach(MATCH_IMAGE_TEST_CASE)
  })

  context('landscape', () => {
    viewportLandscapePresets().forEach(SCROLLBAR_TEST_CASE)
    viewportLandscapePresets().forEach(MATCH_IMAGE_TEST_CASE)
  })
})
