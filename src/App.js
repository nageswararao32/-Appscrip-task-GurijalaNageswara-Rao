import React from 'react';
import Home from './Componenets/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileView from './Componenets/MobileView';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/mb' element={<MobileView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
