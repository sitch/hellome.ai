/// <reference types="cypress" />

import { isNumber } from 'lodash'

export const orientations: Cypress.ViewportOrientation[] = [
  'portrait',
  'landscape',
]

type Height = number
type Width = number

export const presets: [Cypress.ViewportPreset, Width, Height][] = [
  ['ipad-2', 768, 1024],
  ['ipad-mini', 768, 1024],
  ['iphone-3', 320, 480],
  ['iphone-4', 320, 480],
  ['iphone-5', 320, 568],
  ['iphone-6', 375, 667],
  ['iphone-6+', 414, 736],
  ['iphone-7', 375, 667],
  ['iphone-8', 375, 667],
  ['iphone-x', 375, 812],
  ['iphone-xr', 414, 896],
  ['iphone-se2', 375, 667],
  ['macbook-11', 1366, 768],
  ['macbook-13', 1280, 800],
  ['macbook-15', 1440, 900],
  ['macbook-16', 1536, 960],
  ['samsung-note9', 414, 846],
  ['samsung-s10', 360, 760],
]

export type ViewportCase = {
  label: string
  preset: Cypress.ViewportPreset
  height: number
  width: number
  orientation: Cypress.ViewportOrientation
  viewport: {
    viewportHeight: number
    viewportWidth: number
  }
}

export function viewportPortraitPresets(): ViewportCase[] {
  return presets.map(([preset, height, width]) => {
    return {
      label: `${preset} ${height}x${width}`,
      preset,
      height,
      width,
      orientation: 'portrait',
      viewport: { viewportHeight: height, viewportWidth: width },
    }
  })
}

export function viewportLandscapePresets(): ViewportCase[] {
  return presets.map(([preset, height, width]) => {
    return {
      label: `${preset} ${width}x${height}`,
      preset,
      height,
      width,
      orientation: 'landscape',
      viewport: { viewportHeight: height, viewportWidth: width },
    }
  })
}

export function getDocumentHeight($document: Document) {
  return Math.max(
    Math.max(
      $document.body.scrollHeight,
      $document.documentElement.scrollHeight
    ),
    Math.max(
      $document.body.offsetHeight,
      $document.documentElement.offsetHeight
    ),
    Math.max(
      $document.body.clientHeight,
      $document.documentElement.clientHeight
    )
  )
}

export function assertViewportBoundingRect(viewport: ViewportCase['viewport']) {
  cy.document()
    .then(($document) => {
      return $document.documentElement.getBoundingClientRect().toJSON()
    })
    .then((viewportRect) => {
      expect(viewportRect).to.eql({
        x: 0,
        y: 0,
        width: viewport.viewportWidth,
        height: viewport.viewportHeight,
        top: 0,
        right: viewport.viewportWidth,
        bottom: viewport.viewportHeight,
        left: 0,
      })
    })
}

export type BreakPointOptions = {
  minHeight?: number
  maxHeight?: number
  minWidth?: number
  maxWidth?: number
}

export function filterByBreakPoint(options: BreakPointOptions) {
  return ({ viewport: { viewportHeight, viewportWidth } }: ViewportCase) => {
    return ![
      isNumber(options.minHeight) && viewportHeight < options.minHeight,
      isNumber(options.maxHeight) && viewportHeight > options.maxHeight,
      isNumber(options.minWidth) && viewportWidth < options.minWidth,
      isNumber(options.maxWidth) && viewportWidth > options.maxWidth,
    ].some(Boolean)
  }
}
