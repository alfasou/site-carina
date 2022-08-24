export default class SmoothScroll {
  constructor(links, options) {
    //Get all menu links
    this.linksScroll = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: 'smooth',
        block: 'start',
      };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }
  //Makes scroll slightly slower
  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    // When the user clicks on the link, scroll to section
    this.linksScroll.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksScroll.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
