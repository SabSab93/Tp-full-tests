//Squelettes pour l'heure de Jupiter
// export function calculerHeureJupiter(
//   cadrans: { lune: 1 | 2; soleil: 1 | 2; terre: 1 | 2 }
// ): 'mortin' | 'aprenoon' | 'soirning' | 'nuight' {
//   // on calcul la somme brute de chaque cadran
//   // on applique le pouvoir de la lune
//   // on applique le pouvoir du soleil
//   // on applique le pouvoir de la terre
//   // 5) retourner 'mortin','aprenoon','soirning' ou 'nuight'
//   throw new Error('Not implemented')
// }


type Cadrans = { lune: 1 | 2; soleil: 1 | 2; terre: 1 | 2 }
type JupiterHour = 'mortin' | 'aprenoon' | 'soirning' | 'nuight'

export function calculerHeureJupiter({
  lune,
  soleil,
  terre,
}: Cadrans): JupiterHour {

  //Somme brute
  let total = lune + soleil + terre

  //Pouvoir de la Lune
  if (lune === 1) {
    total -= 2
  } else {
    total = Math.floor(total / 2)
  }

  //Pouvoir du Soleil
  let ignoreTerre = false
  if (soleil === 1) {
    ignoreTerre = true
  }

  //Pouvoir de la Terre
  if (!ignoreTerre) {
    if (terre === 1) {
      total += 2
    } else {
      total = 6
    }
  }

  //Resultat final
  if (total <= 2) return 'mortin'
  if (total <= 4) return 'aprenoon'
  if (total <= 5) return 'soirning'
  return 'nuight'
}