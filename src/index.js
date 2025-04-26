// Handle form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        // Convert FormData to an object for compatibility
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        console.log('Form submitted:', formObject);
        this.reset();
        alert('Thank you for your message! I will get back to you soon.');
    });
} else {
    console.warn('Contact form not found.');
}
const anchors = document.querySelectorAll('a[href^="#"]');
if (anchors.length > 0) {
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.querySelector(`#${targetId}`);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                console.warn(`Target element with ID ${targetId} not found.`);
            }
        });
    });
}
window.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.gradient-blob, .gradient-blob-2');
    if (blobs.length > 0) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        blobs.forEach(blob => {
            const speed = blob.classList.contains('gradient-blob') ? 30 : -30;
            blob.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
        });
    }
});