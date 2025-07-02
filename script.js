// Timeline expand/collapse images
const timelineCards = document.querySelectorAll('.timeline-card');
timelineCards.forEach(card => {
  const images = card.querySelector('.timeline-images');
  if (images) images.style.display = 'none';
  card.addEventListener('mouseenter', () => {
    if (images) images.style.display = 'flex';
  });
  card.addEventListener('mouseleave', () => {
    if (images) images.style.display = 'none';
  });
  card.addEventListener('click', () => {
    if (images) images.style.display = images.style.display === 'flex' ? 'none' : 'flex';
  });
});

// Section reveal on scroll
const revealSections = document.querySelectorAll('.reveal-section');
const revealTimeline = document.querySelectorAll('.reveal-timeline');
const observer = new window.IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealSections.forEach(section => observer.observe(section));
revealTimeline.forEach(card => observer.observe(card));

// Scroll-to-top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Subtle animated background (floating blue circles)
const bg = document.getElementById('animated-bg');
const circles = [];
for (let i = 0; i < 18; i++) {
  const c = document.createElement('div');
  c.className = 'bg-circle';
  c.style.left = Math.random() * 100 + 'vw';
  c.style.top = Math.random() * 100 + 'vh';
  c.style.width = c.style.height = (30 + Math.random() * 60) + 'px';
  c.style.opacity = 0.12 + Math.random() * 0.12;
  c.style.animationDuration = (12 + Math.random() * 10) + 's';
  bg.appendChild(c);
  circles.push(c);
}
// Animate circles with CSS 

// Infinite scroll for gallery
const galleryGrid = document.getElementById('galleryGrid');
let galleryImgCount = 8;
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    if (galleryImgCount < 40) {
      for (let i = 0; i < 4; i++) {
        galleryImgCount++;
        const img = document.createElement('img');
        img.src = 'https://via.placeholder.com/200x120';
        img.alt = `Project Visual ${galleryImgCount}`;
        galleryGrid.appendChild(img);
      }
    }
  }
});

// Conveyor belt gallery loop logic
const galleryBelt = document.getElementById('galleryBelt');
if (galleryBelt) {
  // Duplicate images for seamless loop
  const imgs = Array.from(galleryBelt.children);
  imgs.forEach(img => {
    const clone = img.cloneNode(true);
    galleryBelt.appendChild(clone);
  });
  // Adjust animation duration based on image count
  const imgCount = imgs.length;
  galleryBelt.style.animationDuration = (imgCount * 4) + 's';
} 