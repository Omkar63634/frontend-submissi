// Scroll animations
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
});

// Initial animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.animate-pop-in');
    
    animateElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animated');
        }, index * 200);
    });
});

// Gallery item hover effect
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('img').style.transform = 'scale(1.05)';
        item.querySelector('.overlay').style.opacity = '1';
    });
    
    item.addEventListener('mouseleave', () => {
        item.querySelector('img').style.transform = 'scale(1)';
        item.querySelector('.overlay').style.opacity = '0';
    });
});

// Feature card hover effect
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
    });
});