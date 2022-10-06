import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ActionCableProvider} from 'react-actioncable-provider'
import actionCable from 'actioncable';

const CableApp = {}

CableApp.cable = actionCable.createConsumer(`ws://localhost:3000/cable`)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ActionCableProvider url={`ws://localhost:3000/cable`}>
    <App />
    </ActionCableProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
