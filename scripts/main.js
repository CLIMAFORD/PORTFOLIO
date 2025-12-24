// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
if (mobileMenuBtn && navLinks) {
  const toggleNav = (e) => {
    // support both touch and click
    if (e) e.preventDefault();
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (icon) icon.classList.toggle('fa-times');
    mobileMenuBtn.setAttribute('aria-expanded', navLinks.classList.contains('active'));
  };

  mobileMenuBtn.addEventListener('click', toggleNav);
  mobileMenuBtn.addEventListener('touchstart', toggleNav, { passive: false });

  // Close mobile menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) icon.classList.remove('fa-times');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Portfolio Filtering (if filter buttons exist)
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filterValue = button.getAttribute('data-filter');
    portfolioItems.forEach(item => {
      if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
    }
  });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}

// Add scroll effect to header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (!header) return;
  if (window.scrollY > 100) {
    header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
  }
});
