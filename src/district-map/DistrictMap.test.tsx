import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import DistrictMap from './DistrictMap'

describe('DistrictMap', () => {
  it('highlights the selected district and notifies hover and click interactions', () => {
    const onHighlightDistretto = vi.fn()
    const onSelectDistretto = vi.fn()

    render(
      <DistrictMap
        highlightedDistrettoId={49}
        onHighlightDistretto={onHighlightDistretto}
        onSelectDistretto={onSelectDistretto}
      />,
    )

    const map = screen.getByRole('group', { name: 'Mappa interattiva dei distretti sanitari' })
    const distretto49Link = screen.getByRole('link', { name: /Distretto 49/i })

    expect(map).toHaveAttribute('data-active-id', '49')

    fireEvent.mouseOver(distretto49Link)
    fireEvent.click(distretto49Link)
    fireEvent.mouseLeave(map)

    expect(onHighlightDistretto).toHaveBeenNthCalledWith(1, 49)
    expect(onSelectDistretto).toHaveBeenCalledWith(49)
    expect(onHighlightDistretto).toHaveBeenLastCalledWith(null)
  })
})
