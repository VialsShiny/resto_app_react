// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/errorPage';

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Routes qui ont Header/Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Route 404 isolée (sans Layout) */}
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </Router>
  );
}
