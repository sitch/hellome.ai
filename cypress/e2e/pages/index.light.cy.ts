/// <reference types="cypress" />

import { emulate } from '@/cypress/commands/emulation'
import {
  MATCH_IMAGE_TEST_CASE,
  SCROLLBAR_TEST_CASE,
} from '@/cypress/commands/screenshots'
import {
  viewportLandscapePresets,
  viewportPortraitPresets,
} from '@/cypress/commands/viewports'

context('<Index /> (light)', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        emulate('light-mode', 'reduced-animation')
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

  context('viewport[portrait]', () => {
    viewportPortraitPresets().forEach(SCROLLBAR_TEST_CASE)
    viewportPortraitPresets().forEach(MATCH_IMAGE_TEST_CASE)
  })

  context('viewport[landscape]', () => {
    viewportLandscapePresets().forEach(SCROLLBAR_TEST_CASE)
    viewportLandscapePresets().forEach(MATCH_IMAGE_TEST_CASE)
  })
})
