import { useState } from 'react'
import { DEFAULT_DISTRETTO_ID, getDistrettoById } from './districts-data'

export function useDistrictSelection(initialSelectedDistrettoId = DEFAULT_DISTRETTO_ID) {
  const [selectedDistrettoId, setSelectedDistrettoId] = useState<number | null>(initialSelectedDistrettoId)
  const [activeDistrettoId, setActiveDistrettoId] = useState<number | null>(null)

  const highlightedDistrettoId = activeDistrettoId ?? selectedDistrettoId
  const selectedDistretto = getDistrettoById(selectedDistrettoId)
  const highlightedDistretto = getDistrettoById(highlightedDistrettoId)

  return {
    selectedDistrettoId,
    setSelectedDistrettoId,
    activeDistrettoId,
    setActiveDistrettoId,
    highlightedDistrettoId,
    selectedDistretto,
    highlightedDistretto,
  }
}
