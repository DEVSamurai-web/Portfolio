document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfólio mescla carregado');

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // simple fade-in on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0px)';
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.card, .profile-card, .hero-left').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'all 600ms cubic-bezier(.2,.9,.2,1)';
    observer.observe(el);
  });
});
