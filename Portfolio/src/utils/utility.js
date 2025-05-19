
export const toggleTheme = () => {
  const html = document.documentElement;
  html.classList.toggle('dark')

  const newTheme = html.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
};

export const loadTheme = () => {
  const theme = localStorage.getItem('theme') || 'light';
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  }
};
