import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Software from '../Software/Software';
import Resume from '../Resume/Resume';

function App() {
  const [section, setSection] = useState('/');

  return (
    <main className='font-body bg-beige h-fit min-h-screen w-screen'>
      <Nav section={section} setSection={setSection} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/software' element={<Software section={section} setSection={setSection} />} />
        <Route path='/resume' element={<Resume section={section} setSection={setSection} />} />
        {/* <Route path='/videos' element={<Videos />} /> */}
      </Routes>
      {/* <Footer /> */}
    </main>
  );
}

export default App;
