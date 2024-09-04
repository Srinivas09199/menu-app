import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="navbar">  
        <div className="toggle-button" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`nav-items ${isOpen ? 'active' : ''}`}>
          <ul>
          <Link to="/">{t('home')}</Link>
            <li><Link to="/movies" onClick={toggleNavbar}>{t('movies')}</Link></li>
            <li><Link to="/tvshows" onClick={toggleNavbar}>{t('tvShows')}</Link></li>
            <li><Link to="/sports" onClick={toggleNavbar}>{t('sports')}</Link></li>
            <li><Link to="/live" onClick={toggleNavbar}>{t('live')}</Link></li>
            <li><Link to="/settings" onClick={toggleNavbar}>Settings</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
