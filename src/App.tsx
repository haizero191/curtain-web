import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './pages/components/Header/Header';


function App() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event:any) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]);

  
  
  return (
    <div className="App">
      {/* Header */}
      <Header status={scrollTop > 100 ? true : false}/>
      {/* Router outlet */}
      <Outlet />
    </div>
  );
}

export default App;
