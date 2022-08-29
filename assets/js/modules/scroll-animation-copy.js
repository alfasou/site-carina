export default class ScrollAnimation {
  constructor(sections) {
    //Get all sections with .js-scroll class
    this.sections = document.querySelectorAll(sections);
    //Sets window height for the animation to start
    this.windowHeight = window.innerHeight * 0.4;

    this.animateScroll = this.animateScroll.bind(this);
  }
  // When the user scrolls to the window height adds class .active to the section
  animateScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - this.windowHeight;
      const isSectionVisible = sectionTop - this.windowHeight < 0;
      if (isSectionVisible) {
        section.classList.add('active');
      } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
  }

  //Activates the scroll animation
  init() {
    this.animateScroll();
    window.addEventListener('scroll', this.animateScroll);
  }
}
