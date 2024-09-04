import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Settings from './components/settings';
import './i18n';

const App = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Menu language={language} />} />
        <Route path="/settings" element={<Settings onLanguageChange={handleLanguageChange} />} />
      </Routes>
    </Router>
  );
};

export default App;
