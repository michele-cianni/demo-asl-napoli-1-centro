import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageReferti } from './page/Referti.jsx';
import { Chatbot } from './component/Chatbot.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <PageReferti />
      <Chatbot />
    </>
  </React.StrictMode>
);
