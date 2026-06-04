import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageRedazioneWeb } from './page/RedazioneWeb.jsx';
import { Chatbot } from './component/Chatbot.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <PageRedazioneWeb />
      <Chatbot />
    </>
  </React.StrictMode>
);
