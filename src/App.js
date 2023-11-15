// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your custom theme
import '@fontsource/work-sans/500.css'; // Weight 500
import '@fontsource/work-sans/700.css'; // Weight 700
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Apply the theme */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
