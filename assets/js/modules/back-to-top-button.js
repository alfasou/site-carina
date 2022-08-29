export default class BackToTop {
  constructor(button) {
    //Get the button
    this.mybutton = document.getElementById(button);
  }

  // When the user scrolls down 100px from the top of the document, show the button
  scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      this.mybutton.style.display = 'block';
    } else {
      this.mybutton.style.display = 'none';
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  //Activates the button functions
  init() {
    //Button show up on scroll
    window.onscroll = () => {
      this.scrollFunction();
    };
    //Back to top
    this.mybutton.addEventListener('click', this.backToTop);
  }
}
