(function () {
  // Map section id -> corresponding masthead link
  const links = Array.from(document.querySelectorAll('.masthead__menu-item a'));
  if (!links.length) return;

  const byId = {};
  links.forEach(a => {
    const m = a.getAttribute('href') && a.getAttribute('href').match(/#(.+)$/);
    if (m) byId[m[1]] = a;
  });

  // Watch sections entering/leaving viewport
  const observer = new IntersectionObserver((entries) => {
    // Pick the section that is most visible
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    const id = visible.target.id;
    // Update active class
    links.forEach(a => a.classList.remove('is-active'));
    if (byId[id]) byId[id].classList.add('is-active');
  }, {
    rootMargin: "-20% 0px -60% 0px", // triggers a bit before center
    threshold: [0.2, 0.4, 0.6, 0.8]
  });

  // Observe every section that has an id referenced by the menu
  Object.keys(byId).forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
})();
