// Hent alle sections
const sections = document.querySelectorAll("section");

// Skjul alle sections undtagen hero
sections.forEach(section => {
    if (section.id !== "screen-hero") {
        section.classList.add("hidden");
    }
});