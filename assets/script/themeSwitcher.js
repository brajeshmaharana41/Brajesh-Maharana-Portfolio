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

document.querySelector('.toggle-theme-switcher').addEventListener('click', () => {
  document.querySelector('.theme-switch').classList.toggle('open');
});
