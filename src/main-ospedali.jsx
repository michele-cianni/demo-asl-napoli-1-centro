import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageOspedali } from './page/Ospedali.jsx';
import { Chatbot } from './component/Chatbot.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <PageOspedali />
      <Chatbot />
    </>
  </React.StrictMode>
);
