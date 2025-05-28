

const btn = document.querySelector('.btn');

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  btn.setAttribute('aria-pressed', 'true');
} else {
  document.body.classList.remove('dark');
  btn.setAttribute('aria-pressed', 'false');
}

// Handle toggle click
btn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  btn.setAttribute('aria-pressed', String(isDark));
});
