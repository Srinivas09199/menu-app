import React from 'react';
import { useTranslation } from 'react-i18next';

const Settings = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage);
  };

  return (
    <div>
      <h2>Settings</h2>
      <label htmlFor="language-select">Select Language:</label>
      <select id="language-select" onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="ru">Russian</option>
        <option value="es">Spanish</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  );
};

export default Settings;
