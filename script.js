// Intersection Observer for reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => observer.observe(card));
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Typing effect for profile name
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  const typeWriter = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  };
  
  typeWriter();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
  const profileName = document.querySelector('.profile-name');
  if (profileName) {
    const originalText = profileName.textContent;
    typeWriter(profileName, originalText, 150);
  }
});

// Status badge animation
const statusBadge = document.querySelector('.status-badge');
if (statusBadge) {
  statusBadge.addEventListener('mouseenter', () => {
    statusBadge.style.transform = 'scale(1.05)';
  });
  
  statusBadge.addEventListener('mouseleave', () => {
    statusBadge.style.transform = 'scale(1)';
  });
}

// Parallax background effect
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.glassmorphism-shine');
  
  parallaxElements.forEach(element => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
}); 