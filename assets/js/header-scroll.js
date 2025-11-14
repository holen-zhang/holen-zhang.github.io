(function () {
  // Mirror whether this page is using the "home-hero" class onto <body>
  var isHomeHero = !!document.querySelector('.home-hero');
  document.body.classList.toggle('is-home-hero', isHomeHero);

  // Toggle solid header after a tiny scroll
  function onScroll() {
    var scrolled = window.scrollY > 10;
    document.body.classList.toggle('is-scrolled', scrolled);

    // (Optional) keep the old API the CSS used to rely on:
    var masthead = document.querySelector('.masthead');
    if (masthead) masthead.classList.toggle('is-scrolled', scrolled);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initialize on load
})();
