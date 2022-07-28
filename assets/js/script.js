function initBackToTop() {
  //Get the button
  const mybutton = document.getElementById('btn-back-to-top');

  // When the user scrolls down 100px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener('click', backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
initBackToTop();

function initSmoothScroll() {
  //Get all menu links
  const linksScroll = document.querySelectorAll('.js-menu a[href^="#"]');

  //Makes scroll slightly slower
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  // When the user clicks on the link, scroll to section
  linksScroll.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initSmoothScroll();

function initScrollAnimation() {
  //Get all sections with .js-scroll class
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    //Sets window height for the animation to start
    const windowHeight = window.innerHeight * 0.4;

    // When the user scrolls to the window height adds class .ativo to the section
    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowHeight;
        const isSectionVisible = sectionTop - windowHeight < 0;
        if (isSectionVisible) {
          section.classList.add('ativo');
        }
      });
    }
    //Activates the scroll animation
    animateScroll();
    window.addEventListener('scroll', animateScroll);
  }
}
initScrollAnimation();
