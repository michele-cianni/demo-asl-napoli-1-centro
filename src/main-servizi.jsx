import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageServizi } from './page/Servizi.jsx';
import { Chatbot } from './component/Chatbot.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <PageServizi />
      <Chatbot />
    </>
  </React.StrictMode>
);
