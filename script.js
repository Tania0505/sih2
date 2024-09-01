// JavaScript for handling form submissions and other interactive elements

// Example: Contact form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // You can perform further validation here if necessary

            // Mock submission logic
            alert(`Thank you, ${name}! Your message has been received.`);
            
            // Optionally, you can reset the form after submission
            contactForm.reset();
        });
    }
});
