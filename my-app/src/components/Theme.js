import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';



export default function Theme() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <div className="theme">
      {theme === 'dark' ? (
        <FaMoon size={18} onClick={() => setTheme('light')} />
      ) : (
        <FaSun size={18} onClick={() => setTheme('dark')} />
      )}
    </div>
  );
}