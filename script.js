

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const pressed = btn.getAttribute('aria-pressed') === 'true';
  btn.setAttribute('aria-pressed', String(!pressed));
});
