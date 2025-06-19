import { describe, test, expect } from 'vitest'
import { calculerHeureJupiter } from '../module/functionHeureJupiter'


describe('calculerHeureJupiter', () => {

  test('pour (lune:1, soleil:1, terre:1) renvoie mortin car (somme:1+1+1=3−2=1)', () => {
    const result = calculerHeureJupiter({ lune: 1, soleil: 1, terre: 1 })
    expect(result).toBe('mortin')
  })

  test('pour (lune:1, soleil:1, terre:2) renvoie mortin 0', () => {
    const result = calculerHeureJupiter({ lune: 1, soleil: 1, terre: 2 })
    expect(result).toBe('mortin')
  })

  test('pour (lune:2, soleil:1, terre:1) renvoie mortin car (somme:2+1+1=4/2=2)', () => {
    const result = calculerHeureJupiter({ lune: 2, soleil: 1, terre: 1 })
    expect(result).toBe('mortin')
  })

  test('pour (lune:2, soleil:1, terre:2) renvoie mortin car  (somme:2+1+2=5/2=2)', () => {
    const result = calculerHeureJupiter({ lune: 2, soleil: 1, terre: 2 })
    expect(result).toBe('mortin')
  })

    test('pour (lune:2, soleil:1, terre:1) renvoie mortin  car (somme:2+1+1=4→÷2=2)', () => {
    const result = calculerHeureJupiter({ lune: 2, soleil: 1, terre: 1 })
    expect(result).toBe('mortin')
  })

  test('pour (lune:1, soleil:2, terre:1) renvoie aprenoon car (somme:1+2+1=4−2=2+2=4)', () => {
    const result = calculerHeureJupiter({ lune: 1, soleil: 2, terre: 1 })
    expect(result).toBe('aprenoon')
  })

  test('pour (lune:2, soleil:2, terre:1) renvoie aprenoon car (somme cadran: 2+2+1=(5+1+2)/2)', () => {
    const result = calculerHeureJupiter({ lune: 2, soleil: 2, terre: 1 })
    expect(result).toBe('aprenoon')
  })

  test('pour (lune:2, soleil:2, terre:2) renvoie nuight car soleil et terre = 2 donc forcement le total vaut 6', () => {
    const result = calculerHeureJupiter({ lune: 2, soleil: 2, terre: 2 })
    expect(result).toBe('nuight')
  })

  test('pour (lune:1, soleil:2, terre:1) renvoie aprenoon car (somme:1+2+1=4−2=2+2=4)', () => {
    const result = calculerHeureJupiter({ lune: 1, soleil: 2, terre: 1 })
    expect(result).toBe('aprenoon')
  })

  test('pour (lune:1, soleil:2, terre:2) renvoie nuight car renvoie toujours 6 si soleil et terre = 2', () => {
    const result = calculerHeureJupiter({ lune: 1, soleil: 2, terre: 2 })
    expect(result).toBe('nuight')
  })

})