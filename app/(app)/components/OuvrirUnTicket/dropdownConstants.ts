import { DropdownOption } from './Dropdown'

export const POSTE_OPTIONS: DropdownOption[] = [
  { value: 'posteA', label: 'Poste A' },
  { value: 'posteB', label: 'Poste B' },
  { value: 'posteC', label: 'Poste C' },
  { value: 'posteD', label: 'Poste D' }
]

export const TYPE_OPTIONS: DropdownOption[] = [
  { value: 'incident', label: 'Incident' },
  { value: 'probleme', label: 'Problème' },
  { value: 'demande', label: 'Demande' },
  { value: 'changement', label: 'Changement' }
]

export const PRIORITE_OPTIONS: DropdownOption[] = [
  { value: 'basse', label: 'Basse', color: '#10b981' }, // Green
  { value: 'moyenne', label: 'Moyenne', color: '#f59e0b' }, // Yellow
  { value: 'haute', label: 'Haute', color: '#f97316' }, // Orange
  { value: 'critique', label: 'Critique', color: '#dc2626' } // Red
]

export const IMPACT_OPTIONS: DropdownOption[] = [
  { value: 'aucun_impact', label: 'Aucun impact' },
  { value: 'site_desactive', label: 'Site désactivé' },
  { value: 'probleme_de_serveur', label: 'Problème de serveur' },
  { value: 'mineur', label: 'Mineur' },
  { value: 'majeur', label: 'Majeur' },
  { value: 'crise', label: 'Crise' }
]
