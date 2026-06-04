export function getDistrettoIdFromTarget(target: EventTarget | null): number | null {
  if (!(target instanceof Element)) {
    return null
  }

  const mapGroup = target.closest('.js-map-group')
  if (mapGroup?.id.startsWith('Distretto')) {
    const id = Number(mapGroup.id.replace('Distretto', ''))
    return Number.isFinite(id) ? id : null
  }

  const mapLink = target.closest("a[href*='/distretti-sanitari/distretto-']")
  const href = mapLink?.getAttribute('href')
  if (!href) {
    return null
  }

  const match = href.match(/distretto-(\d+)/)
  if (!match) {
    return null
  }

  const id = Number(match[1])
  return Number.isFinite(id) ? id : null
}
