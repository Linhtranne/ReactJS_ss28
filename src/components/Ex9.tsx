import React, { useState } from 'react';
import ListPost from './ListPost';

const App = () => {

  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('english');
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'english' ? 'vietnamese' : 'english'));
  };

  return (
    <div className={`app ${theme}`}>
      <h1>{language === 'english' ? 'App' : 'Ứng dụng'}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={toggleLanguage}>Toggle Language</button>
      <ListPost />
    </div>
  );
};

export default App;
