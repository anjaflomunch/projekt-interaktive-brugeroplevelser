console.log("JS virker");

// Hent alle sections
const sections = document.querySelectorAll("section");

// Skjul alle sections undtagen hero
sections.forEach(section => {
    if (section.id !== "screen-hero") {
        section.classList.add("hidden");
    }
});

// Skift mellem screens

const showScreen = (screenId) => {
    // Skjul alle sections
    sections.forEach(section => {
        section.classList.add("hidden");
    });
    // Vis den ønskede screen
    document.querySelector("#" + screenId).classList.remove("hidden");
};

// Hero knap
const btnHero = document.querySelector("#btn-hero");
btnHero.addEventListener("click", () => {
    showScreen("screen-introduction");
});

// Start her knap
const btnStart = document.querySelector("#btn-start");
btnStart.addEventListener("click", () => {
    showScreen("screen-notification");
});

// Notification screen knapper
const btnOpenMail = document.querySelector("#btn-aaben-mail");
btnOpenMail.addEventListener("click", () => {
    showScreen("screen-mail");
});

const btnIgnoreNotification = document.querySelector("#btn-ignorer-notifikation");
btnIgnoreNotification.addEventListener("click", () => {
    showScreen("screen-ignore");
});

// Tilbage knap - notification
const btnBackNotification = document.querySelector("#btn-tilbage-notification");
btnBackNotification.addEventListener("click", () => {
    showScreen("screen-introduction");
});
