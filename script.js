/* ============================================================
   VARIABLES GLOBALES
   ============================================================ */

let currentLang = "fr";
let currentTheme = "day";
let currentNickname = "";
let currentAvatar = "";
let welcomeDone = false;

/* ============================================================
   TRADUCTIONS
   ============================================================ */

const translations = {
    fr: {
        home_title: "Accueil & histoire de VLS Official",
        home_subtitle: "Communauté ouverte, soutien aux écrivains & espace de discussion",
        menu_home: "Accueil & histoire",
        menu_rules: "Règlement général",
        menu_staff: "Staff & soutiens",
        menu_servers: "Autres serveurs",
        menu_settings: "Paramètres",
        label_pseudo: "Pseudo :",
        label_lang: "Langue :",
        label_time: "Heure (Europe/Paris)",
        label_theme: "Jour / Nuit",
        theme_day: "Jour",
        theme_night: "Nuit"
    },

    en: {
        home_title: "Home & history of VLS Official",
        home_subtitle: "Open community, support for writers & discussion space",
        menu_home: "Home & history",
        menu_rules: "General rules",
        menu_staff: "Staff & supporters",
        menu_servers: "Other servers",
        menu_settings: "Settings",
        label_pseudo: "Nickname:",
        label_lang: "Language:",
        label_time: "Time (Europe/Paris)",
        label_theme: "Day / Night",
        theme_day: "Day",
        theme_night: "Night"
    },

    es: {
        home_title: "Inicio e historia de VLS Official",
        home_subtitle: "Comunidad abierta, apoyo a escritores y espacio de discusión",
        menu_home: "Inicio e historia",
        menu_rules: "Reglamento general",
        menu_staff: "Staff y apoyos",
        menu_servers: "Otros servidores",
        menu_settings: "Ajustes",
        label_pseudo: "Apodo:",
        label_lang: "Idioma:",
        label_time: "Hora (Europa/París)",
        label_theme: "Día / Noche",
        theme_day: "Día",
        theme_night: "Noche"
    },

    de: {
        home_title: "Start & Geschichte von VLS Official",
        home_subtitle: "Offene Community, Unterstützung für Schreibende & Diskussionsraum",
        menu_home: "Start & Geschichte",
        menu_rules: "Allgemeines Regelwerk",
        menu_staff: "Team & Unterstützer",
        menu_servers: "Weitere Server",
        menu_settings: "Einstellungen",
        label_pseudo: "Nickname:",
        label_lang: "Sprache:",
        label_time: "Uhrzeit (Europa/Paris)",
        label_theme: "Tag / Nacht",
        theme_day: "Tag",
        theme_night: "Nacht"
    },

    zh: {
        home_title: "VLS Official 首页与历史",
        home_subtitle: "开放社区、写作者支持与交流空间",
        menu_home: "首页与历史",
        menu_rules: "服务器规则",
        menu_staff: "管理团队与支持者",
        menu_servers: "其他服务器",
        menu_settings: "设置",
        label_pseudo: "昵称：",
        label_lang: "语言：",
        label_time: "时间（欧洲/巴黎）",
        label_theme: "日 / 夜",
        theme_day: "日",
        theme_night: "夜"
    },

    ar: {
        home_title: "الصفحة الرئيسية وتاريخ VLS Official",
        home_subtitle: "مجتمع مفتوح، دعم للكتّاب ومساحة للنقاش",
        menu_home: "الرئيسية والتاريخ",
        menu_rules: "القواعد العامة",
        menu_staff: "الطاقم والداعمين",
        menu_servers: "الخوادم الأخرى",
        menu_settings: "الإعدادات",
        label_pseudo: "الاسم:",
        label_lang: "اللغة:",
        label_time: "الوقت (أوروبا/باريس)",
        label_theme: "نهار / ليل",
        theme_day: "نهار",
        theme_night: "ليل"
    }
};

/* ============================================================
   FONCTION : APPLIQUER LA TRADUCTION
   ============================================================ */

function applyTranslation() {
    const t = translations[currentLang];

    document.querySelector("#page-home h1").textContent = t.home_title;
    document.querySelector("#page-home h2").textContent = t.home_subtitle;

    document.querySelector("[data-target='page-home']").textContent = t.menu_home;
    document.querySelector("[data-target='page-rules']").textContent = t.menu_rules;
    document.querySelector("[data-target='page-staff']").textContent = t.menu_staff;
    document.querySelector("[data-target='page-servers']").textContent = t.menu_servers;
    document.querySelector("[data-target='page-settings']").textContent = t.menu_settings;

    document.querySelector("#profile-nickname-label").textContent = t.label_pseudo;
    document.querySelector("#language-label").textContent = t.label_lang;
    document.querySelector("#time-label").textContent = t.label_time;
    document.querySelector("#theme-label").textContent = t.label_theme;

    document.querySelector("#theme-toggle").textContent =
        currentTheme === "day" ? t.theme_day : t.theme_night;
}

/* ============================================================
   FONCTION : CHANGER DE PAGE
   ============================================================ */

function switchPage(pageId) {
    document.querySelectorAll(".page-section").forEach(section => {
        section.hidden = true;
    });

    document.querySelector(`#${pageId}`).hidden = false;
}

/* ============================================================
   FONCTION : METTRE À JOUR L’HEURE
   ============================================================ */

function updateTime() {
    const now = new Date();
    const formatted = now.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/Paris"
    });

    document.querySelector("#time-value").textContent = formatted;
    document.querySelector("#settings-time-value").textContent = formatted;
}

/* ============================================================
   FONCTION : BASCULER JOUR / NUIT
   ============================================================ */

function toggleTheme() {
    currentTheme = currentTheme === "day" ? "night" : "day";

    if (currentTheme === "night") {
        document.body.classList.add("night");
    } else {
        document.body.classList.remove("night");
    }

    applyTranslation();
    saveState();
}

/* ============================================================
   FONCTION : SAUVEGARDE LOCALSTORAGE
   ============================================================ */

function saveState() {
    const state = {
        lang: currentLang,
        theme: currentTheme,
        nickname: currentNickname,
        avatar: currentAvatar,
        welcomeDone: welcomeDone
    };

    localStorage.setItem("vls_state", JSON.stringify(state));
}

/* ============================================================
   FONCTION : CHARGER LOCALSTORAGE
   ============================================================ */

function loadState() {
    const raw = localStorage.getItem("vls_state");
    if (!raw) return;

    const state = JSON.parse(raw);

    currentLang = state.lang || "fr";
    currentTheme = state.theme || "day";
    currentNickname = state.nickname || "";
    currentAvatar = state.avatar || "";
    welcomeDone = state.welcomeDone || false;

    if (currentTheme === "night") {
        document.body.classList.add("night");
    }

    document.querySelector("#profile-nickname-value").textContent = currentNickname;
    document.querySelector("#settings-nickname-value").textContent = currentNickname;
    document.querySelector("#settings-nickname-input").value = currentNickname;

    document.querySelector("#language-select").value = currentLang;
    document.querySelector("#settings-language-select").value = currentLang;

    if (currentAvatar !== "") {
        document.querySelector("#user-avatar").src = currentAvatar;
    }

    applyTranslation();
}

/* ============================================================
   FONCTION : INITIALISATION
   ============================================================ */

function init() {
    loadState();
    updateTime();
    setInterval(updateTime, 30000);

    if (!welcomeDone) {
        document.querySelector("#welcome-modal").style.display = "flex";
    } else {
        document.querySelector("#welcome-modal").style.display = "none";
    }
}

/* ============================================================
   ÉVÉNEMENTS : FENÊTRE DE BIENVENUE
   ============================================================ */

document.querySelector("#welcome-validate").addEventListener("click", () => {
    const pseudo = document.querySelector("#welcome-nickname").value.trim();
    const lang = document.querySelector("#welcome-language").value;

    currentNickname = pseudo;
    currentLang = lang;
    welcomeDone = true;

    document.querySelector("#profile-nickname-value").textContent = pseudo;
    document.querySelector("#settings-nickname-value").textContent = pseudo;
    document.querySelector("#settings-nickname-input").value = pseudo;

    document.querySelector("#language-select").value = lang;
    document.querySelector("#settings-language-select").value = lang;

    applyTranslation();
    saveState();

    document.querySelector("#welcome-modal").style.display = "none";
});

document.querySelector("#welcome-guest").addEventListener("click", () => {
    welcomeDone = true;
    saveState();
    document.querySelector("#welcome-modal").style.display = "none";
});

/* ============================================================
   ÉVÉNEMENTS : MENU
   ============================================================ */

document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        switchPage(target);
    });
});

/* ============================================================
   ÉVÉNEMENTS : LANGUE
   ============================================================ */

document.querySelector("#language-select").addEventListener("change", () => {
    currentLang = document.querySelector("#language-select").value;
    applyTranslation();
    saveState();
});

document.querySelector("#settings-language-save").addEventListener("click", () => {
    currentLang = document.querySelector("#settings-language-select").value;
    document.querySelector("#language-select").value = currentLang;
    applyTranslation();
    saveState();
});

/* ============================================================
   ÉVÉNEMENTS : PSEUDO
   ============================================================ */

document.querySelector("#settings-nickname-save").addEventListener("click", () => {
    const newPseudo = document.querySelector("#settings-nickname-input").value.trim();
    currentNickname = newPseudo;

    document.querySelector("#profile-nickname-value").textContent = newPseudo;
    document.querySelector("#settings-nickname-value").textContent = newPseudo;

    saveState();
});

/* ============================================================
   ÉVÉNEMENTS : AVATAR
   ============================================================ */

document.querySelector("#settings-avatar-save").addEventListener("click", () => {
    const file = document.querySelector("#settings-avatar-input").files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
        currentAvatar = e.target.result;
        document.querySelector("#user-avatar").src = currentAvatar;
        saveState();
    };

    reader.readAsDataURL(file);
});

/* ============================================================
   ÉVÉNEMENTS : THÈME
   ============================================================ */

document.querySelector("#theme-toggle").addEventListener("click", toggleTheme);
document.querySelector("#settings-theme-toggle").addEventListener("click", toggleTheme);

/* ============================================================
   LANCEMENT
   ============================================================ */

init();
