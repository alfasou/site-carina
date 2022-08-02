export default function initSmoothScroll() {
  //Get all menu links
  const linksScroll = document.querySelectorAll(
    '[data-scroll="smooth"] a[href^="#"]'
  );

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
