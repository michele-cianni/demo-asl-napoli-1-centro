import React from 'react';

const MOBILE_BREAKPOINT = 768;
const COMPACT_BREAKPOINT = 1024;

const getViewportWidth = () =>
  typeof window === 'undefined' ? COMPACT_BREAKPOINT : window.innerWidth;

const useViewportWidth = () => {
  const [width, setWidth] = React.useState(getViewportWidth);

  React.useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const handleResize = () => setWidth(window.innerWidth);


    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

const useResponsive = () => {
  const width = useViewportWidth();

  return {
    width,
    isMobile: width < MOBILE_BREAKPOINT,
    isCompact: width < COMPACT_BREAKPOINT,
  };
};

export { MOBILE_BREAKPOINT, COMPACT_BREAKPOINT, useResponsive };
