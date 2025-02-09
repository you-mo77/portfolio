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

document.addEventListener("DOMContentLoaded", () => {
    // 開くボタンの処理
    document.querySelectorAll("button[data-target]").forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            document.getElementById(targetId).showModal();
        });
    });

    // 閉じるボタンの処理
    document.querySelectorAll("dialog .close").forEach(button => {
        button.addEventListener("click", () => {
            button.closest("dialog").close();
        });
    });
});