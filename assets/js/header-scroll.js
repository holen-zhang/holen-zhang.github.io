window.addEventListener('scroll', function() {
  const masthead = document.querySelector('.masthead');
  if (window.scrollY > 10) { // 10px is the trigger point
    masthead.classList.add('is-scrolled');
  } else {
    masthead.classList.remove('is-scrolled');
  }
});
