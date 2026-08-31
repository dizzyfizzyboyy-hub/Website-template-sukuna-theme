// small stuff that makes the page feel alive.
// nothing here needs touching to customise the site.

// year in the footer
var year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// mobile menu
var toggle = document.querySelector('.nav-toggle');
var links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // close the menu after picking a link
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// fade sections in on scroll (skipped for people who dislike motion)
var okToAnimate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (okToAnimate && 'IntersectionObserver' in window) {
  var revealables = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealables.forEach(function (el) { observer.observe(el); });
} else {
  // old browser / reduced motion: nothing hides
  document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
}

// follow along the section you're looking at, in the nav
var navAnchor = document.querySelectorAll('.nav-links a');
var sections = Array.from(navAnchor)
  .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
  .filter(Boolean);

var activeLink = function (id) {
  navAnchor.forEach(function (a) {
    var on = a.getAttribute('href') === '#' + id;
    a.classList.toggle('active', on);
  });
};

if (okToAnimate && 'IntersectionObserver' in window && navAnchor.length) {
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) activeLink(entry.target.id);
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(function (s) { spy.observe(s); });
}