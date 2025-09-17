import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react'; // o tus iconos preferidos
import Button from '@/components/ui/button.jsx'; // tu gemelo en React

export function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  // Derivar el estado inicial de la clase que dejó el ThemeScript
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove(theme === 'dark' ? 'light' : 'dark');
    html.classList.add(theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  function toggle() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  return (
    <Button
      variant='ghost'
      size='sm'
      aria-label='Toggle theme'
      onClick={toggle}
      className='relative text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
    >
      <Sun
        className={`h-4 w-4 transition-all ${
          theme === 'dark' ? '-rotate-90 scale-0' : 'rotate-0 scale-100'
        }`}
        aria-hidden
      />
      <Moon
        className={`absolute h-4 w-4 transition-all ${
          theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
        }`}
        aria-hidden
      />
      <span className='sr-only'>Cambiar tema</span>
    </Button>
  );
}

export default ThemeToggle;
