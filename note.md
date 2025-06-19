import { calculerHeureJupiter } from './jupiter-time'

test.describe('Heure Jupiter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173')
  })

  test('retourne mortin dans le cas (1,1,2) donne total 0', async ({ page }) => {
    const result = await page.evaluate(() =>

      calculerHeureJupiter({ lune: 1, soleil: 1, terre: 2 })
    )
    expect(result).toBe('mortin')
  })

  test('retourne aprenoon dans le cas (2,2,1) donne total 3', async ({ page }) => {
    const result = await page.evaluate(() =>
      calculerHeureJupiter({ lune: 2, soleil: 2, terre: 1 })
    )
    expect(result).toBe('aprenoon')
  })

  test('retourne nuight dans le cas (2,2,2) donne total >5', async ({ page }) => {
    const result = await page.evaluate(() =>

      calculerHeureJupiter({ lune: 2, soleil: 2, terre: 2 })
    )
    expect(result).toBe('nuight')
  })
})