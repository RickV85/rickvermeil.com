import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Software from '../Software/Software';
import Resume from '../Resume/Resume';
import Footer from '../Footer/Footer';

function App() {
  const [section, setSection] = useState('/');

  return (
    <main className='font-body bg-beige h-fit min-h-screen w-screen'>
      <Nav section={section} setSection={setSection} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/software' element={<Software setSection={setSection} />} />
        <Route path='/resume' element={<Resume setSection={setSection} />} />
        {/* <Route path='/videos' element={<Videos />} /> */}
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
