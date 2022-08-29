// Smooth Scroll
import SmoothScroll from './modules/smooth-scroll.js';
const smoothScroll = new SmoothScroll('[data-scroll="smooth"] a[href^="#"]');
smoothScroll.init();

// Scroll Animation
import ScrollAnimation from './modules/scroll-animation.js';
const scrollAnimation = new ScrollAnimation('[data-scroll="anime"]');
scrollAnimation.init();

// Back To Top Button
import BackToTop from './modules/back-to-top-button.js';
const backToTop = new BackToTop('btn-back-to-top');
backToTop.init();
