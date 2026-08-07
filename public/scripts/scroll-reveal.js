const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        if (delay > 0) {
          entry.target.style.transitionDelay = `${delay}ms`;
        }
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.addEventListener('DOMContentLoaded', () => {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('revealed'));
    return;
  }
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});
