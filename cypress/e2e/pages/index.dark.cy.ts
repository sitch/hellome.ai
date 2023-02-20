/// <reference types="cypress" />

import { emulate } from '@/cypress/commands/emulation'
import {
  MATCH_IMAGE_TEST_CASE,
  SCROLLBAR_TEST_CASE,
} from '@/cypress/commands/screenshots'
import {
  filterByBreakPoint,
  viewportLandscapePresets,
  viewportPortraitPresets,
} from '@/cypress/commands/viewports'

context('<Index /> (dark-mode)', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        emulate('dark-mode', 'reduced-animation')
      },
    })
    cy.waitUntil(() => cy.get('body').should('not.have.class', 'loading'))
    cy.waitUntil(() => cy.contains('Request Access'))
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

    // TODO: fix these break points
    viewportPortraitPresets()
      .filter(filterByBreakPoint({ minHeight: 420 }))
      .forEach(SCROLLBAR_TEST_CASE)
  })

  context('landscape', () => {
    viewportLandscapePresets().forEach(MATCH_IMAGE_TEST_CASE)

    // TODO: fix these break points
    viewportLandscapePresets()
      .filter(filterByBreakPoint({ minHeight: 420 }))
      .forEach(SCROLLBAR_TEST_CASE)
  })
})
