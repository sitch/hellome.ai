export function getMouseDegrees(x: number, y: number, degreeLimit: number) {
  let dx = 0
  let dy = 0
  let xDiff
  let yDiff
  let xPercentage
  let yPercentage

  const screen = { x: window.innerWidth, y: window.innerHeight }

  // Left (Rotates neck left between 0 and -degreeLimit)
  // 1. If cursor is in the left half of screen
  if (x <= screen.x / 2) {
    // 2. Get the difference between middle of screen and cursor position
    xDiff = screen.x / 2 - x
    // 3. Find the percentage of that difference (percentage toward edge of screen)
    xPercentage = (xDiff / (screen.x / 2)) * 100
    // 4. Convert that to a percentage of the maximum rotation we allow for the neck
    dx = ((degreeLimit * xPercentage) / 100) * -1
  }

  // Right (Rotates neck right between 0 and degreeLimit)
  if (x >= screen.x / 2) {
    xDiff = x - screen.x / 2
    xPercentage = (xDiff / (screen.x / 2)) * 100
    dx = (degreeLimit * xPercentage) / 100
  }
  // Up (Rotates neck up between 0 and -degreeLimit)
  if (y <= screen.y / 2) {
    yDiff = screen.y / 2 - y
    yPercentage = (yDiff / (screen.y / 2)) * 100
    // Note that I cut degreeLimit in half when she looks up
    dy = ((degreeLimit * 0.5 * yPercentage) / 100) * -1
  }
  // Down (Rotates neck down between 0 and degreeLimit)
  if (y >= screen.y / 2) {
    yDiff = y - screen.y / 2
    yPercentage = (yDiff / (screen.y / 2)) * 100
    dy = (degreeLimit * yPercentage) / 100
  }
  return { x: dx, y: dy }
}
