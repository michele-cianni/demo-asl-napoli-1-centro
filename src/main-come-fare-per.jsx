import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageComeFarePer } from './page/ComeFarePer.jsx';
import { Chatbot } from './component/Chatbot.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <PageComeFarePer />
      <Chatbot />
    </>
  </React.StrictMode>
);
