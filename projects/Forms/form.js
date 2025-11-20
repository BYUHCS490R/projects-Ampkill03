document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('animeForm');
    const statusMessage = document.getElementById('statusMessage');
    form.addEventListener('submit', handleFormSubmit);
    function handleFormSubmit(event) {
        event.preventDefault();
        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const joindate = document.getElementById('joindate').value.trim();
        const genre = document.getElementById('genre').value;
        const watchstyle = document.querySelector('input[name="watchstyle"]:checked')?.value || '';
        const notifyEvents = document.querySelector('input[name="notify_events"]')?.checked || false;
        const notifyNews = document.querySelector('input[name="notify_news"]')?.checked || false;
        const about = document.getElementById('about').value.trim();
        const agree = document.querySelector('input[name="agree"]').checked;
        const formData = {
            fullname,
            email,
            phone,
            password,
            joindate,
            genre,
            watchstyle,
            notifications: {
                events: notifyEvents,
                news: notifyNews
            },
            about,
            agree
        };
        const errors = [];
        if (!fullname) {
            errors.push('Please enter your full name.');
        }
        if (!email) {
            errors.push('Please enter your email address.');
        }
        if (!joindate) {
            errors.push('Please enter your preferred join date.');
        }
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        if (joindate && !datePattern.test(joindate)) {
            errors.push('Join date must be in the format YYYY-MM-DD.');
        }
        if (password.length < 8) {
            errors.push('Password must be at least 8 characters long.');
        }
        if (!agree) {
            errors.push('You must agree to the club rules and terms.');
        }
        if (errors.length > 0) {
            alert(errors.join('\n'));
            return;
        }
        console.log('Form data:', formData);
        statusMessage.textContent = 'Submitting...';
        statusMessage.style.marginTop = '1rem';
        const xhr = new XMLHttpRequest();
        const url = 'response.json?data=' + encodeURIComponent(JSON.stringify(formData));
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        statusMessage.textContent = response.message || 'Form submitted successfully!';
                        statusMessage.classList.add('show');
                        form.reset();
                        Array.from(form.elements).forEach(el => {
                            el.disabled = true;
                        });
                    } catch (e) {
                        console.error('Error parsing JSON response:', e);
                        statusMessage.textContent = 'There was a problem reading the server response.';
                    }
                } else {
                    console.error('XHR error. Status:', xhr.status);
                    statusMessage.textContent = 'There was an error submitting the form. Please try again later.';
                }
            }
        };
        xhr.send();
    }
});