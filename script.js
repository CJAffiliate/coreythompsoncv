// Smooth reveal animations for cards
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

// Apply reveal animations to cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  
  // Add reveal animations with intersection observer
  cards.forEach(card => {
    observer.observe(card);
  });

  // Add hover effects to timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateX(10px)';
      item.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateX(0)';
    });
  });

  // Add smooth scrolling for navigation
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Gallery image hover effects
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    const img = item.querySelector('img');
    
    item.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });

  // Add parallax effect to glassmorphism elements
  const glassmorphismElements = document.querySelectorAll('.glassmorphism-shine');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    glassmorphismElements.forEach((element, index) => {
      const speed = index === 0 ? 0.5 : -0.3;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Add typing effect to profile name
  const profileName = document.querySelector('.profile-name');
  if (profileName) {
    const text = profileName.textContent;
    profileName.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        profileName.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
  }

  // Add status badge animation
  const statusBadge = document.querySelector('.status-badge');
  if (statusBadge) {
    statusBadge.style.opacity = '0';
    statusBadge.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      statusBadge.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      statusBadge.style.opacity = '1';
      statusBadge.style.transform = 'translateY(0)';
    }, 1500);
  }

  // Add contact item hover animations
  const contactItems = document.querySelectorAll('.contact-item');
  contactItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }, 2000 + (index * 200));
  });
});

// Add smooth scroll behavior for any anchor links
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
}); 