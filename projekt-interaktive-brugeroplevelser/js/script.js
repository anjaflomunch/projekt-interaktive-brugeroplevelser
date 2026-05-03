console.log("JS virker");

//// Array med alle screen id'er
const screenIds = [
    "screen-hero",
    "screen-introduction",
    "screen-notification",
    "screen-ignore",
    "screen-mail",
    "screen-reminder",
    "screen-mail-reminder",
    "screen-afsenderinformation",
    "screen-afsenderinformation-reminder",
    "screen-fake-site",
    "screen-fake-site-reminder",
    "screen-good-end",
    "screen-mid-end-ignore",
    "screen-mid-end-escape",
    "screen-bad-end"
];

//// Hent alle sections
const sections = document.querySelectorAll("section");


//// Skjul alle sections undtagen hero
sections.forEach(section => {
    if (section.id !== "screen-hero") {
        section.classList.add("hidden");
    }
});


//// Skift mellem screens

const showScreen = (screenId) => {
    // Skjul alle sections
    screenIds.forEach(id => {
        document.querySelector("#" + id).classList.add("hidden");
    });
    // Vis den ønskede screen
    document.querySelector("#" + screenId).classList.remove("hidden");
};


//// Hero knap
const btnHero = document.querySelector("#btn-hero");
btnHero.addEventListener("click", () => {
    showScreen("screen-introduction");
});

// Introduction knap
const btnStart = document.querySelector("#btn-start");
btnStart.addEventListener("click", () => {
    showScreen("screen-notification");
});


//// Notification screen knapper
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


//// Ignore screen knap
const btnContinue = document.querySelector("#btn-fortsaet");
btnContinue.addEventListener("click", () => {
    showScreen("screen-reminder");
});

// Tilbage knap - ignore
const btnBackIgnore = document.querySelector("#btn-tilbage-ignore");
btnBackIgnore.addEventListener("click", () => {
    showScreen("screen-notification");
});


//// Mail screen knapper
const btnClickLink = document.querySelector("#btn-klik-link-mail");
btnClickLink.addEventListener("click", () => {
    showScreen("screen-fake-site");
});

const btnCheckSender = document.querySelector("#btn-tjek-afsender-mail");
btnCheckSender.addEventListener("click", () => {
    showScreen("screen-afsenderinformation");
});

const btnGoToSuDk = document.querySelector("#btn-su-dk-mail");
btnGoToSuDk.addEventListener("click", () => {
    showScreen("screen-good-end");
});

const btnDeleteMail = document.querySelector("#btn-slet-mail");
btnDeleteMail.addEventListener("click", () => {
    showScreen("screen-mid-end-ignore");
});

// Tilbage knap - mail
const btnBackMail = document.querySelector("#btn-tilbage-mail");
btnBackMail.addEventListener("click", () => {
    showScreen("screen-notification");
});


//// Reminder screen knapper
const btnOpenReminder = document.querySelector("#btn-aaben-reminder");
btnOpenReminder.addEventListener("click", () => {
    showScreen("screen-mail-reminder");
});

const btnIgnoreReminder = document.querySelector("#btn-ignorer-reminder");
btnIgnoreReminder.addEventListener("click", () => {
    showScreen("screen-mid-end-ignore");
});

// Tilbage knap - reminder

const btnBackReminder = document.querySelector("#btn-tilbage-reminder");
btnBackReminder.addEventListener("click", () => {
    showScreen("screen-ignore");
});


//// Mail reminder screen knapper

const btnClickLinkReminder = document.querySelector("#btn-klik-link-mail-reminder");
btnClickLinkReminder.addEventListener("click", () => {
    showScreen("screen-fake-site-reminder");
});

const btnCheckSenderReminder = document.querySelector("#btn-tjek-mail-reminder");
btnCheckSenderReminder.addEventListener("click", () => {
    showScreen("screen-afsenderinformation-reminder");
});

const btnGoToSuDkReminder = document.querySelector("#btn-su-dk-mail-reminder");
btnGoToSuDkReminder.addEventListener("click", () => {
    showScreen("screen-good-end");
});

const btnDeleteMailReminder = document.querySelector("#btn-slet-mail-reminder");
btnDeleteMailReminder.addEventListener("click", () => {
    showScreen("screen-mid-end-ignore");
});

// Tilbage knap - mail
const btnBackMailReminder = document.querySelector("#btn-tilbage-mail-reminder");
btnBackMailReminder.addEventListener("click", () => {
    showScreen("screen-reminder");
});


//// Afsenderinformation screen knapper
const btnClickLinkSender = document.querySelector("#btn-klik-link-afsender");
btnClickLinkSender.addEventListener("click", () => {
    showScreen("screen-fake-site");
});

const btnGoToSuDkSender = document.querySelector("#btn-su-dk-afsender");
btnGoToSuDkSender.addEventListener("click", () => {
    showScreen("screen-good-end");
});

const btnDeleteSender = document.querySelector("#btn-slet-afsender");
btnDeleteSender.addEventListener("click", () => {
    showScreen("screen-good-end");
});

// Tilbage knap - afsenderinformation
const btnBackMailSender = document.querySelector("#btn-tilbage-afsender");
btnBackMailSender.addEventListener("click", () => {
    showScreen("screen-mail");
});


//// Afsenderinformation reminder screen knapper
const btnClickLinkSenderReminder = document.querySelector("#btn-klik-link-afsender-reminder");
btnClickLinkSenderReminder.addEventListener("click", () => {
    showScreen("screen-fake-site-reminder");
});

const btnGoToSuDkSenderReminder = document.querySelector("#btn-su-dk-afsender-reminder");
btnGoToSuDkSenderReminder.addEventListener("click", () => {
    showScreen("screen-good-end");
});

const btnDeleteSenderReminder = document.querySelector("#btn-slet-afsender-reminder");
btnDeleteSenderReminder.addEventListener("click", () => {
    showScreen("screen-good-end");
});

// Tilbage knap - afsenderinformation reminder
const btnBackMailSenderReminder = document.querySelector("#btn-tilbage-afsender-reminder");
btnBackMailSenderReminder.addEventListener("click", () => {
    showScreen("screen-mail-reminder");
});


//// Fake site screen knapper
const btnEnterInfo = document.querySelector("#btn-indtast");
btnEnterInfo.addEventListener("click", () => {
    showScreen("screen-bad-end");
});

const btnGoToSuDkFakesite = document.querySelector("#btn-su-dk-fakesite");
btnGoToSuDkFakesite.addEventListener("click", () => {
    showScreen("screen-mid-end-escape");
});

const btnCloseFakesite = document.querySelector("#btn-luk-fakesite");
btnCloseFakesite.addEventListener("click", () => {
    showScreen("screen-mid-end-escape");
});

// Tilbage knap - fake site
const btnBackFakesite = document.querySelector("#btn-tilbage-fakesite");
btnBackFakesite.addEventListener("click", () => {
    showScreen("screen-mail");
});


//// Fake site reminder screen knapper
const btnEnterInfoReminder = document.querySelector("#btn-indtast-reminder");
btnEnterInfoReminder.addEventListener("click", () => {
    showScreen("screen-bad-end");
});

const btnGoToSuDkFakesiteReminder = document.querySelector("#btn-su-dk-fakesite-reminder");
btnGoToSuDkFakesiteReminder.addEventListener("click", () => {
    showScreen("screen-mid-end-escape");
});

const btnCloseFakesiteReminder = document.querySelector("#btn-luk-fakesite-reminder");
btnCloseFakesiteReminder.addEventListener("click", () => {
    showScreen("screen-mid-end-escape");
});

// Tilbage knap - fake site reminder
const btnBackFakesiteReminder = document.querySelector("#btn-tilbage-fakesite-reminder");
btnBackFakesiteReminder.addEventListener("click", () => {
    showScreen("screen-mail-reminder");
});


//// Prøv igen knapper
const btnsTryAgain = document.querySelectorAll(".knap-proev-igen");
btnsTryAgain.forEach(btn => {
    btn.addEventListener("click", () => {
        showScreen("screen-notification");
    });
});
