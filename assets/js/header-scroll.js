(function () {
  function onScroll() {
    document.body.classList.toggle('is-scrolled', window.scrollY > 10);
    // keep legacy class for any old selectors, harmless otherwise
    var masthead = document.querySelector('.masthead');
    if (masthead) masthead.classList.toggle('is-scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', onScroll);
  onScroll();
})();
