// Responsive Navbar Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('open');
});

// Dropdown toggle for menu bar (click/tap)
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const parent = this.parentElement;
    // Close other open dropdowns
    document.querySelectorAll('.dropdown').forEach(drop => {
      if (drop !== parent) drop.classList.remove('open');
    });
    parent.classList.toggle('open');
  });
  // Keyboard accessibility
  toggle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
});

// Close dropdowns when clicking outside
window.addEventListener('click', function(e) {
  document.querySelectorAll('.dropdown').forEach(drop => {
    if (!drop.contains(e.target)) drop.classList.remove('open');
  });
});

// Optional: Close menu when clicking outside (mobile)
document.addEventListener('click', (e) => {
  if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
    navToggle.classList.remove('open');
  }
});

// Hero background images fade out on scroll
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      hero.classList.add('scrolled');
    } else {
      hero.classList.remove('scrolled');
    }
  });
}
