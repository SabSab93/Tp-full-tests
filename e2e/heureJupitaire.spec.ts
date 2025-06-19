// tests/heureJupiter.e2e.ts
import { test, expect } from '@playwright/test'

test.describe('Interface Jupiter E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173')
  })

  
  test('bouton "Calculer" désactivé quand aucun champ rempli', async ({ page }) => {
    const btn = page.getByRole('button', { name: 'Calculer' })

    await page.getByLabel('Lune').fill('')
    await page.getByLabel('Soleil').fill('')
    await page.getByLabel('Terre').fill('')

    await expect(btn).toBeDisabled()
  })


  test('bouton "Calculer" désactivé quand un seul champ rempli', async ({ page }) => {
    const bouton = page.getByRole('button', { name: 'Calculer' })
    const lune   = page.getByLabel('Lune')
    const soleil = page.getByLabel('Soleil')
    const terre  = page.getByLabel('Terre')

    // Lune seule
    await lune.fill('1')
    await soleil.fill('')
    await terre.fill('')
    await expect(bouton).toBeDisabled()

    // Soleil seul
    await lune.fill('')
    await soleil.fill('2')
    await terre.fill('')
    await expect(bouton).toBeDisabled()

    // Terre seule
    await soleil.fill('')
    await terre.fill('2')
    await expect(bouton).toBeDisabled()
  })


  test('bouton "Calculer" désactivé quand deux champs remplis', async ({ page }) => {
    const bouton = page.getByRole('button', { name: 'Calculer' })

    // Lune + Soleil
    await page.getByLabel('Lune').fill('1')
    await page.getByLabel('Soleil').fill('2')
    await page.getByLabel('Terre').fill('')
    await expect(bouton).toBeDisabled()

    // Lune + Terre
    await page.getByLabel('Terre').fill('1')
    await expect(bouton).toBeDisabled()

    // Soleil + Terre
    await page.getByLabel('Lune').fill('')
    await page.getByLabel('Soleil').fill('2')
    await expect(bouton).toBeDisabled()
  })


  test('bouton "Calculer" activé quand trois champs remplis', async ({ page }) => {
    const bouton = page.getByRole('button', { name: 'Calculer' })

    await page.getByLabel('Lune').fill('2')
    await page.getByLabel('Soleil').fill('1')
    await page.getByLabel('Terre').fill('2')

    await expect(bouton).toBeEnabled()
  })


  test('Champs de saisie : 0 devient 1, 3 devient 2', async ({ page }) => {
    const champs = [
      { nom: 'Lune',   locator: page.getByLabel('Lune')   },
      { nom: 'Soleil', locator: page.getByLabel('Soleil') },
      { nom: 'Terre',  locator: page.getByLabel('Terre')  },
    ]

    for (const { nom, locator } of champs) {
      await test.step(`${nom} : taper 0 ⇒ "1"`, async () => {
        await locator.fill('0')
        await locator.blur()
        await expect(locator).toHaveValue('1')
      })

      await test.step(`${nom} : taper 3 ⇒ "2"`, async () => {
        await locator.fill('3')
        await locator.blur()
        await expect(locator).toHaveValue('2')
      })
    }
  })

 
  test('texte de résultat vide tant que le bouton est désactivé', async ({ page }) => {
    const btnCalculer = page.getByRole('button', { name: 'Calculer' })
    const lune   = page.getByLabel('Lune')
    const soleil = page.getByLabel('Soleil')
    const zoneRes = page.locator('#resultat')

    // Aucun champ
    await expect(btnCalculer).toBeDisabled()
    await expect(zoneRes).toHaveText('Résultat :')

    // Un champ
    await lune.fill('1')
    await expect(btnCalculer).toBeDisabled()
    await expect(zoneRes).toHaveText('Résultat :')

    // Deux champs
    await soleil.fill('2')
    await expect(btnCalculer).toBeDisabled()
    await expect(zoneRes).toHaveText('Résultat :')
  })
})