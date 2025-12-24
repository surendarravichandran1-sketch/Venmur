// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize feather icons
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
});

// Product selection functionality (for future enhancement)
let selectedProducts = [];

function addToEnquiry(productName) {
    if (!selectedProducts.includes(productName)) {
        selectedProducts.push(productName);
        updateEnquiryButton();
    }
}

function updateEnquiryButton() {
    const enquiryBtn = document.getElementById('enquiryBtn');
    if (selectedProducts.length > 0) {
        enquiryBtn.classList.remove('bg-gray-400');
        enquiryBtn.classList.add('bg-green-600', 'hover:bg-green-700');
        enquiryBtn.disabled = false;
    } else {
        enquiryBtn.classList.add('bg-gray-400');
        enquiryBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
        enquiryBtn.disabled = true;
    }
}