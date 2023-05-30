// Adicione o seguinte código ao arquivo script.js

// Captura todos os links do menu
const menuLinks = document.querySelectorAll('.menu a');

// Adiciona um evento de clique a cada link
menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});