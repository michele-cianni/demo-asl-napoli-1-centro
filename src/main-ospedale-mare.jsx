import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageOspedaleMare } from './page/OspedaleMare.jsx';
import { Chatbot } from './component/Chatbot.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <PageOspedaleMare />
      <Chatbot />
    </>
  </React.StrictMode>
);
