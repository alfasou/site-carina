// Back To Top Button
import initBackToTop from './modules/back-to-top-button.js';
initBackToTop();

// Smooth Scroll
import SmoothScroll from './modules/smooth-scroll.js';
const smoothScroll = new SmoothScroll('[data-scroll="smooth"] a[href^="#"]');
smoothScroll.init();

// Scroll Animation
import initScrollAnimation from './modules/scroll-animation.js';
initScrollAnimation();
