// Animação de scroll
const elementos = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
      observer.unobserve(entrada.target);
    }
  });
}, {
  threshold: 0.2
});

elementos.forEach(el => observer.observe(el));

// Modo escuro
const toggle = document.getElementById('darkToggle');
const body = document.body;

// Aplicar modo salvo
if (localStorage.getItem('modo') === 'dark') {
  body.classList.add('dark');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark');
    localStorage.setItem('modo', 'dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('modo', 'light');
  }
});
