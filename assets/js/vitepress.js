document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('theme-toggle');
  btn && btn.addEventListener('click', function() {
    document.body.classList.toggle('theme-dark');
    document.body.classList.toggle('theme-light');
    localStorage.setItem('theme', document.body.classList.contains('theme-dark') ? 'dark' : 'light');
  });
  // 恢复主题
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('theme-dark');
    document.body.classList.remove('theme-light');
  }
});