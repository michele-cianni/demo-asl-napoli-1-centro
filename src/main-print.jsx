import React from 'react';
import ReactDOM from 'react-dom/client';
import { TopBar, BrandRow, MainNav } from './component/Header.jsx';
import { Hero } from './component/Hero.jsx';
import { HowToGrid } from './component/HowTo.jsx';
import { WaitingLists } from './component/Waiting.jsx';
import { Screening } from './component/Screening.jsx';
import { News, Facilities } from './component/News.jsx';
import { Footer } from './component/Footer.jsx';
import { FSEBand } from './component/FSEBand.jsx';

function PrintApp() {
  return (
    <div style={{ background: '#fff' }}>
      <TopBar />
      <BrandRow />
      <MainNav />
      <Hero />
      <div style={{ breakBefore: 'page', pageBreakBefore: 'always' }}>
        <HowToGrid />
      </div>
      <div style={{ breakBefore: 'page', pageBreakBefore: 'always' }}>
        <WaitingLists />
      </div>
      <div style={{ breakBefore: 'page', pageBreakBefore: 'always' }}>
        <Screening />
      </div>
      <div style={{ breakBefore: 'page', pageBreakBefore: 'always' }}>
        <FSEBand />
      </div>
      <div style={{ breakBefore: 'page', pageBreakBefore: 'always' }}>
        <News />
      </div>
      <div style={{ breakBefore: 'page', pageBreakBefore: 'always' }}>
        <Facilities />
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PrintApp />);

// Auto-print after fonts + layout settle
(async () => {
  try {
    await document.fonts.ready;
  } catch {}
  await new Promise((r) => setTimeout(r, 1500));
  window.print();
})();
