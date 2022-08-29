export default class ScrollAnimation {
  constructor(sections) {
    //Gets all sections with .js-scroll class
    this.sections = document.querySelectorAll(sections);
    //Sets window height for the animation to start
    this.windowHeight = window.innerHeight * 0.7;

    this.checkDistance = this.checkDistance.bind(this);
  }

  //Gets the top distance of each section
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowHeight),
      };
    });
  }

  //Checks the distance of each section from the top
  // When the user scrolls to the window height adds class .active to the section
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('active');
      } else if (item.element.classList.contains('active')) {
        item.element.classList.remove('active');
      }
    });
  }

  //Activates the scroll animation
  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  //Removes the animation event
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
