import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    revealElements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index, 8) * 90}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="app-container">
      <div className=""></div>
      <Navbar />
      <main className="main-content">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
