// Light/Dark mode toggle
const toggle = document.getElementById('toggle-mode');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Persist mode
window.addEventListener('load', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }

  // Loader hide after 2.5s
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
  }, 2500);
});
