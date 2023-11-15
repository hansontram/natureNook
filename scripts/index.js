document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav-middle-links');
  
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('nav--visible');
    });
  });
  