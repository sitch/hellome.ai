/// <reference types="cypress" />

import { disableAnimationStyles } from './emulation'
import {
  assertViewportRect,
  getDocumentHeight,
  ViewportCase,
} from './viewports'

export const viewportOptions: Cypress.MatchImageOptions = {
  screenshotConfig: { capture: 'viewport' },
}

export const MATCH_IMAGE_TEST_CASE = ({ label, viewport }: ViewportCase) => {
  context(label, () => {
    beforeEach(() => {
      disableAnimationStyles()
    })

    it('matchImage', viewport, () => {
      cy.document().matchImage(viewportOptions)
    })
  })
}

export const SCROLLBAR_TEST_CASE = ({ label, viewport }: ViewportCase) => {
  context(label, () => {
    it('has no scrollbar', viewport, () => {
      assertViewportRect(viewport)
      // cy.scrollTo('bottom').window().its('scrollY').should('equal', 0)

      cy.document().then(($document) => {
        expect(getDocumentHeight($document)).to.equal(viewport.viewportHeight)
      })
    })
  })
  // })
}
