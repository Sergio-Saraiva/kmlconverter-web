import React from 'react';

import GlobalStyle from './styles/global';


import Header from './components/Header';
import Footer from './components/Footer';
import UploadArea from './components/UploadArea';

function App() {
  return (
    <>
      <Header />
      <UploadArea />
      <Footer/>
      <GlobalStyle />
    </>    
  );
}

export default App;
