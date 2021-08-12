import React from 'react';
//import {ViewButton} from './components/ViewButton/index';<ViewButton >Funciona</ViewButton>
//import SideBar from './components/SideBar'
import Webpages from './pages/index'
import GlobalStyles from './style/GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Webpages />
    </div>
  );
}

export default App;