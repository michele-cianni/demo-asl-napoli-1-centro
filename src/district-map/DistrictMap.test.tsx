import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import DistrictMap from './DistrictMap';

describe('DistrictMap', () => {
  it('highlights the selected district and notifies hover and click interactions', () => {
    const onHighlightDistretto = vi.fn();
    const onSelectDistretto = vi.fn();

    render(
      <DistrictMap
        highlightedDistrettoId={25}
        onHighlightDistretto={onHighlightDistretto}
        onSelectDistretto={onSelectDistretto}
      />
    );

    const map = screen.getByRole('group', { name: 'Mappa interattiva dei distretti sanitari' });
    const distretto25Link = screen.getByRole('link', { name: /Distretto 25/i });

    expect(map).toHaveAttribute('data-active-id', '25');

    fireEvent.mouseOver(distretto25Link);
    fireEvent.click(distretto25Link);
    fireEvent.mouseLeave(map);

    expect(onHighlightDistretto).toHaveBeenNthCalledWith(1, 25);
    expect(onSelectDistretto).toHaveBeenCalledWith(25);
    expect(onHighlightDistretto).toHaveBeenLastCalledWith(null);
  });
});
