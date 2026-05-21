const container = document.getElementById('hero-container');
const label = container.dataset.heroLabel;

fetch('/views/shared/sharedHero.html')
  .then(response => response.text())
  .then(data => {
    container.innerHTML = data;
    document.getElementById('hero-label').textContent = label;
  });
