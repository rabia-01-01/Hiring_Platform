// JavaScript for Feedback Form
document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('successMsg').style.display = 'block';
    this.reset();
    setTimeout(() => {
        document.getElementById('successMsg').style.display = 'none';
    }, 4000);
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.hash) {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        }
    });
});