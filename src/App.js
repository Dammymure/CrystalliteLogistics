import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import About from '../src/pages/About';
import Home from '../src/pages/Home';

function App() {
  return (
    <div className="font-Inter font">
      <BrowserRouter>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;