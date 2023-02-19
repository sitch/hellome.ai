/// <reference types="cypress" />

export const orientations: Cypress.ViewportOrientation[] = [
  'portrait',
  'landscape',
]
export const presets: [Cypress.ViewportPreset, number, number][] = [
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
  return presets.map(([preset, width, height]) => {
    return {
      label: `${preset} ${width}x${height}`,
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
