/*import React from 'react'
import NavBar from './NavBar';
import MobileView from './MobileView';

function Home() {
    const isMobile = window.innerWidth <= 600;
  return (
    <div>
       {isMobile ? <MobileView /> : <NavBar />}
    </div>
  )
}

export default Home;*/

import React, { useState, useLayoutEffect } from 'react';
import NavBar from '../Componenets/NavBar';
import MobileView from '../Componenets/MobileView';

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useLayoutEffect(() => {
    function updateSize() {
      setIsMobile(window.innerWidth <= 600);
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div>
      {isMobile ? <MobileView /> : <NavBar />}
    </div>
  );
}

export default Home;


