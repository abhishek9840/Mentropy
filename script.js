document.addEventListener('DOMContentLoaded', function() {
    const modalContainer = document.getElementById('modalContainer');
    const closeBtn = document.getElementById('closeBtn');
    const toggleLink = document.getElementById('toggleLink');
    const formTitle = document.getElementById('formTitle');
    const toggleText = document.getElementById('toggleText');
    const submitBtn = document.getElementById('submitBtn');
    const authForm = document.getElementById('authForm');

    let isLoginMode = true;

    toggleLink.addEventListener('click', function(event) {
        event.preventDefault();
        isLoginMode = !isLoginMode;

        if (isLoginMode) {
            formTitle.textContent = 'Log in';
            toggleText.innerHTML = 'or <a href="#" id="toggleLink">create a free account</a>';
            submitBtn.textContent = 'Request OTP';
        } else {
            formTitle.textContent = 'Join MΣПƬЯӨPY';
            toggleText.innerHTML = 'Already have an account? <a href="#" id="toggleLink">Log in</a>';
            submitBtn.textContent = 'Request OTP';
        }
    });

    closeBtn.addEventListener('click', function() {
        modalContainer.style.display = 'none';
    });

    authForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle form submission here
    });
});
