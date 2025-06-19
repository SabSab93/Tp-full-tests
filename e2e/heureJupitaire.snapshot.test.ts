import { test, expect } from '@playwright/test'

test.describe('Snapshot visuel de la page d’accueil', () => {
  test('la page d’accueil ne change pas visuellement', async ({ page }) => {
    await page.goto('http://localhost:5173')
    await expect(page).toHaveScreenshot('homepage.png', { fullPage: true })
  })
})

