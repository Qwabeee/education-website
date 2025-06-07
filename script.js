// === Utility Functions ===
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// === Mobile Menu Toggle ===
const menuBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const openIcon = document.querySelector('.open-menu');
const closeIcon = document.querySelector('.close-menu');

if (menuBtn && navLinks && openIcon && closeIcon) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        openIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
} else {
    console.warn('Mobile menu elements not found.');
}

// === Form Label Animation ===
const labels = document.querySelectorAll('.form-control label');
if (labels.length) {
    labels.forEach(label => {
        label.innerHTML = label.innerText
            .split('')
            .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
            .join('');
    });
}

// === Get Started Button ===
const getStarted = document.getElementById('login');
if (getStarted) {
    getStarted.addEventListener('click', debounce(() => {
        getStarted.disabled = true;
        getStarted.textContent = 'Loading...';
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 300);
    }, 300));
} else {
    console.warn('Get Started button not found.');
}

// === Smooth Scroll for Anchor Links ===
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu after clicking
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                openIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        }
    });
});

// === Contact Form Submission ===
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Basic validation
        if (!data.name || !data.email || !data.message) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate form submission (replace with API call in full-stack)
        console.log('Contact Form Submitted:', data);
        alert('Message sent successfully!');
        contactForm.reset();
    });
} else {
    console.warn('Contact form not found.');
}

// === Newsletter Form Submission ===
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;

        // Basic validation
        if (!email) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate newsletter subscription
        console.log('Newsletter Subscribed:', { email });
        alert('Subscribed successfully!');
        newsletterForm.reset();
    });
} else {
    console.warn('Newsletter form not found.');
}
