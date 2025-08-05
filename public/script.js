const toggleMenuOpen = () => document.querySelector('header').classList.toggle('open');

const imageLayout = document.querySelector('.image_layout');
const infoLayout = document.querySelector('.info_layout');

const featureElements = document.querySelectorAll('.feature');
featureElements.forEach(feature => {
    feature.addEventListener('click', function(e) {
        e.preventDefault();
        featureElements.forEach(el => el.classList.remove('active'));
        feature.classList.add('active');

        const index = Array.from(featureElements).indexOf(feature);
        imageLayout.style.transform = `translateX(-${index * (100 / 3)}%)`;
        infoLayout.style.transform = `translateX(-${index * (100 / 3)}%)`;
    });
});

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', function() {
        faq.classList.toggle('open');
    });
});

const emailSubmitBtn = document.getElementById('emailSubmitBtn');
emailSubmitBtn.addEventListener('click', function() {
    const emailInput = document.getElementById('emailInput');
    const emailContainer = document.querySelector('.email_container');
    const errorMessage = document.querySelector('.error_message');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(emailInput.value)) {
        emailContainer.classList.remove('error');
        errorMessage.classList.add('hidden');
        emailInput.value = '';
        alert('Thank you for subscribing!');
    } else {
        emailContainer.classList.add('error');
        errorMessage.classList.remove('hidden');
    }
});