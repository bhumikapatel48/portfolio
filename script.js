
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');

    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
        hamburger.classList.toggle('open');
      });

      hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          mobileNav.classList.toggle('open');
        }
      });

      // Close menu when a link is clicked
      document.querySelectorAll('#mobileNav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.classList.remove('open');
          hamburger.classList.remove('open');
        });
      });
    }

    // Cursor code
    const cursor = document.querySelector('.cursor');
    window.addEventListener('mousemove', e => {
      cursor.style.top = e.clientY + 'px';
      cursor.style.left = e.clientX + 'px';
    });

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
  });

