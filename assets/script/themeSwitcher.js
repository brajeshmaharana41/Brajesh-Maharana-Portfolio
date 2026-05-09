function setActiveTheme(name) {
  const themeClasses = portfolioData.themes.map(t => 'theme-' + t.name);
  document.body.classList.remove(...themeClasses);
  document.body.classList.add('theme-' + name);
}

document.querySelectorAll('.mode-switch').forEach(radio => {
  radio.addEventListener('change', function () {
    document.body.classList.toggle('dark', this.value === 'dark');
  });
});

document.getElementById('theme-toggle-btn').addEventListener('click', () => {
  document.getElementById('theme-switch-panel').classList.toggle('open');
});

// Close panel when clicking outside
document.addEventListener('click', e => {
  const panel = document.getElementById('theme-switch-panel');
  const toggle = document.getElementById('theme-toggle-btn');
  if (!panel.contains(e.target) && !toggle.contains(e.target)) {
    panel.classList.remove('open');
  }
});
