import { useState, useEffect } from 'react'
import { calculerHeureJupiter } from './module/functionHeureJupiter'

export default function App() {

  const [valeurLune,   setValeurLune]   = useState<string>('')   
  const [valeurSoleil, setValeurSoleil] = useState<string>('')
  const [valeurTerre,  setValeurTerre]  = useState<string>('')  

  const [resultat, setResultat] = useState<string>('')

  function choixValeur(texte: string): '1' | '2' {
    const entier = Math.floor(Number(texte) || 0)
    if (entier < 1) return '1'
    if (entier > 2) return '2'
    return entier.toString() as '1' | '2'
  }

  function validerLune() {
    const corrige = choixValeur(valeurLune)
    setValeurLune(corrige)
  }

  function validerSoleil() {
    const corrige = choixValeur(valeurSoleil)
    setValeurSoleil(corrige)
  }

  function validerTerre() {
    const corrige = choixValeur(valeurTerre)
    setValeurTerre(corrige)
  }

  function lancerCalcul() {
    const cadrans = {
      lune:   choixValeur(valeurLune) as unknown   as 1 | 2,
      soleil: choixValeur(valeurSoleil) as unknown as 1 | 2,
      terre:  choixValeur(valeurTerre) as unknown  as 1 | 2,
    }

    const heure = calculerHeureJupiter(cadrans)

    setResultat(heure)
  }

  let boutonDesactive = false        
  if (valeurLune === '')   boutonDesactive = true
  if (valeurSoleil === '') boutonDesactive = true
  if (valeurTerre === '')  boutonDesactive = true


  useEffect(() => {
    if (boutonDesactive) {
      setResultat('')
    }
  }, [boutonDesactive])

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <label>
        Lune&nbsp;
        <input
          type="number"
          min="1"
          max="2"
          value={valeurLune}
          onChange={e => setValeurLune(e.target.value)}
          onBlur={validerLune}
        />
      </label>
      <br />

      <label>
        Soleil&nbsp;
        <input
          type="number"
          min="1"
          max="2"
          value={valeurSoleil}
          onChange={e => setValeurSoleil(e.target.value)}
          onBlur={validerSoleil}
        />
      </label>
      <br />

      <label>
        Terre&nbsp;
        <input
          type="number"
          min="1"
          max="2"
          value={valeurTerre}
          onChange={e => setValeurTerre(e.target.value)}
          onBlur={validerTerre}
        />
      </label>
      <br />

      <button
        onClick={lancerCalcul}
        disabled={boutonDesactive}
        style={{ marginTop: 12 }}
      >
        Calculer
      </button>

      <div id="resultat" style={{ marginTop: 12 }}>
        <strong>Résultat&nbsp;:</strong> {resultat}
      </div>
    </div>
  )
}
