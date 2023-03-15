import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';

function App() {
  return (
    <main className='font-body bg-beige h-screen'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      {/* Footer */}
    </main>
  );
}

export default App;
