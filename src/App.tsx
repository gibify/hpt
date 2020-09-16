import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => (
  <BrowserRouter>
    <div className="App">
      <Routes />
      
      <GlobalStyles />
    </div>
  </BrowserRouter>
  
)

export default App;
