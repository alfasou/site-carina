// Back To Top Button
import initBackToTop from './modules/back-to-top-button-copy.js';
initBackToTop();

// Smooth Scroll
import SmoothScroll from './modules/smooth-scroll.js';
const smoothScroll = new SmoothScroll('[data-scroll="smooth"] a[href^="#"]');
smoothScroll.init();

// Scroll Animation
import ScrollAnimation from './modules/scroll-animation-copy.js';
const scrollAnimation = new ScrollAnimation('[data-scroll="anime"]');
scrollAnimation.init();
