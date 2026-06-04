import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageMaresca } from './page/Maresca.jsx';
import { Chatbot } from './component/Chatbot.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <PageMaresca />
      <Chatbot />
    </>
  </React.StrictMode>
);
