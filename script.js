// Hamburger toggle for mobile nav
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

// Also toggle on keyboard enter/space for accessibility
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    mobileNav.classList.toggle('open');
  }
});

// Custom cursor effect
const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Optional: Cursor grows on clickable elements
const interactiveElements = 'a, button, input, textarea, select, label';

document.querySelectorAll(interactiveElements).forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '35px';
    cursor.style.height = '35px';
    cursor.style.background = 'rgba(255, 82, 82, 0.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '18px';
    cursor.style.height = '18px';
    cursor.style.background = '#ff5252';
  });
});
