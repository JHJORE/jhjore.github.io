function toggleTheme() {
    const bodyElement = document.querySelector('body');
    bodyElement.classList.toggle('dark-mode');
  }

const toggleButton = document.getElementById('toggleButton');
toggleButton.onclick = toggleTheme;