import { Routes, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';

function App() {
  return (
    <main className='font-body bg-beige h-fit min-h-screen w-screen'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/software' element={<Software />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/videos' element={<Videos />} /> */}
      </Routes>
      {/* <Footer /> */}
    </main>
  );
}

export default App;
