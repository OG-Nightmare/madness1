import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav.jsx';
import Restocards from './components/Restocards.jsx';
import Menupage from './components/Menupage.jsx';

createRoot(document.getElementById("root")).render(
  <>
    <Nav />
    <Router>
      <Routes>
        <Route path="/" element={<Restocards />} />
        <Route path="/restaurant/:id" element={<Menupage />} />
      </Routes>
    </Router>


    </>
);
