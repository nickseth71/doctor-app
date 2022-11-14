import React from 'react';
import './App.css';
import './assets/css/Reset.css';
import './assets/css/global.css';
import Routers from './routing/routers';

import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
