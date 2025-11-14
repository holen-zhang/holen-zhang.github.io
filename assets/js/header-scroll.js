(function () {
  // Detect if this page uses the hero layout (class present anywhere on the page)
  var isHomeHero = !!document.querySelector('.home-hero');
  document.body.classList.toggle('is-home-hero', isHomeHero);

  function onScroll() {
    var scrolled = window.scrollY > 10;
    document.body.classList.toggle('is-scrolled', scrolled);

    // Maintain backward compatibility if any CSS targets .masthead.is-scrolled
    var masthead = document.querySelector('.masthead');
    if (masthead) masthead.classList.toggle('is-scrolled', scrolled);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', onScroll);
  onScroll(); // initialize
})();
