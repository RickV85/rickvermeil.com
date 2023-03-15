import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';

function App() {
  return (
    <main>
      {/* Nav */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
