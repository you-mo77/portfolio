document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".slide");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(element => {
        observer.observe(element);
    });
});