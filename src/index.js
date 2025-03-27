// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    console.log('Form submitted:', Object.fromEntries(formData));
    this.reset();
    alert('Thank you for your message! I will get back to you soon.');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to gradient blobs
window.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.gradient-blob, .gradient-blob-2');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    blobs.forEach(blob => {
        const speed = blob.classList.contains('gradient-blob') ? 30 : -30;
        blob.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
    });
});