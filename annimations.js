// animations.js
document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in");
    const cards = document.querySelectorAll(".service-card, .solution-card, .mission-card");
    const teamMembers = document.querySelectorAll(".team-member");

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));
    cards.forEach(card => appearOnScroll.observe(card));
    teamMembers.forEach(member => appearOnScroll.observe(member));
});