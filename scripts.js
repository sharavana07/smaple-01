// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    const scrollTopButton = document.getElementById('scroll-top');

    // Toggle navigation menu on mobile
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Show or hide scroll-to-top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    // Scroll to top on button click
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Piracy Policy toggle functionality
    const policyLink = document.getElementById('piracy-policy-link');
    const policySection = document.getElementById('piracy-policy');

    policyLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (policySection.style.display === 'none' || policySection.style.display === '') {
            policySection.style.display = 'block';
            policyLink.textContent = 'Hide Piracy Policy';
        } else {
            policySection.style.display = 'none';
            policyLink.textContent = 'Piracy Policy';
        }
    });
});
