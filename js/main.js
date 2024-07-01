document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            const name = document.querySelector('input[name="name"]');
            const email = document.querySelector('input[name="email"]');
            const message = document.querySelector('textarea[name="message"]');
            let valid = true;

            if (!name.value) {
                valid = false;
                alert("Please enter your name.");
            }

            if (!email.value || !validateEmail(email.value)) {
                valid = false;
                alert("Please enter a valid email address.");
            }

            if (!message.value) {
                valid = false;
                alert("Please enter your message.");
            }

            if (!valid) {
                e.preventDefault();
            }
        });
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    // Responsive Navbar
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav ul');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('nav-open');
        });
    }

    // Dynamic Content Loading (if needed)
    const loadMoreButton = document.querySelector('#load-more');
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', () => {
            // Load more content (e.g., more projects)
            const newProject = document.createElement('div');
            newProject.innerHTML = `
                <img src="img/new_project.jpg" alt="New Project">
                <p>New Project: Description of the new project.</p>
            `;
            document.querySelector('.projects').appendChild(newProject);
        });
    }
});