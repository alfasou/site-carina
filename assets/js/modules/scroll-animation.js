export default function initScrollAnimation() {
  //Get all sections with .js-scroll class
  const sections = document.querySelectorAll('[data-scroll="anime"]');

  //Sets window height for the animation to start
  const windowHeight = window.innerHeight * 0.4;

  // When the user scrolls to the window height adds class .active to the section
  function animateScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowHeight;
      const isSectionVisible = sectionTop - windowHeight < 0;
      if (isSectionVisible) {
        section.classList.add('active');
      } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
  }

  if (sections.length) {
    //Activates the scroll animation
    animateScroll();
    window.addEventListener('scroll', animateScroll);
  }
}
