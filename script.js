const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.desktop-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = '☰';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.faq-item').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const active = button.classList.toggle('active');
    answer.style.maxHeight = active ? answer.scrollHeight + 'px' : '0px';
  });
});

const form = document.getElementById('leadForm');
const status = document.getElementById('formStatus');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Thanks — the form layout is ready. Connect it to your email, CRM or form provider before launch.';
  form.reset();
});
