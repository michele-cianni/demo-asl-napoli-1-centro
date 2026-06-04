import mapSvg from './mappa-distretti.svg?raw'
import { getDistrettoIdFromTarget } from './map-helpers'
import styles from './DistrictMap.module.css'

export interface DistrictMapProps {
  highlightedDistrettoId?: number | null
  onHighlightDistretto?: (id: number | null) => void
  onSelectDistretto?: (id: number) => void
  ariaLabel?: string
  ariaDescribedBy?: string
  className?: string
}

export default function DistrictMap({
  highlightedDistrettoId = null,
  onHighlightDistretto,
  onSelectDistretto,
  ariaLabel = 'Mappa interattiva dei distretti sanitari',
  ariaDescribedBy,
  className,
}: DistrictMapProps) {
  return (
    <div
      className={[styles['map-wrapper'], className].filter(Boolean).join(' ')}
      data-active-id={highlightedDistrettoId ?? undefined}
      dangerouslySetInnerHTML={{ __html: mapSvg }}
      role="group"
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      onMouseOver={(event) => {
        const id = getDistrettoIdFromTarget(event.target)
        if (id !== null) {
          onHighlightDistretto?.(id)
        }
      }}
      onMouseLeave={() => onHighlightDistretto?.(null)}
      onFocusCapture={(event) => {
        const id = getDistrettoIdFromTarget(event.target)
        if (id !== null) {
          onHighlightDistretto?.(id)
        }
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          onHighlightDistretto?.(null)
        }
      }}
      onClickCapture={(event) => {
        const id = getDistrettoIdFromTarget(event.target)
        if (id !== null) {
          onSelectDistretto?.(id)
        }
      }}
    />
  )
}
