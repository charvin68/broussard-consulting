// ===========================
// BROUSSARD CONSULTING GROUP
// Landing Page Scripts
// ===========================

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Nav Toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close mobile nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  // --- Navbar scroll effect ---
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- Scroll fade-in animations ---
  const fadeElements = document.querySelectorAll(
    '.service-card, .why-card, .about-content, .about-certs, .contact-info, .contact-form, .credential'
  );

  fadeElements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeElements.forEach(el => observer.observe(el));

  // --- Contact form handling ---
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Log form data (replace with actual API endpoint in production)
    console.log('Form submitted:', data);

    // Show success message
    form.innerHTML = `
      <div class="form-success visible">
        <h3>Message Sent</h3>
        <p>Thanks, ${data.name}. We'll get back to you within 24 hours.</p>
      </div>
    `;
  });

});
