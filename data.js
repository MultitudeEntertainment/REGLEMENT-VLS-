/* ============================================================
   BLOC 4 — DONNÉES FIXES, IMAGES, TRADUCTIONS AVANCÉES
   ============================================================ */

/* ============================
   IMAGES FIXES (PP)
   ============================ */

const IMG_VLS = "https://raw.githubusercontent.com/MultitudeEntertainment/REGLEMENT-VLS-/refs/heads/main/IMG_0491_1.webp";
const IMG_THEMES_DIVERS = "https://raw.githubusercontent.com/MultitudeEntertainment/REGLEMENT-VLS-/refs/heads/main/IMG_0348.webp";

/* Appliquer les PP fixes */
document.querySelector("#vls-logo").src = IMG_VLS;
document.querySelector("#themes-divers-avatar").src = IMG_THEMES_DIVERS;

/* ============================
   TRADUCTIONS AVANCÉES (TEXTES LONGS)
   ============================ */

const longTexts = {
    fr: {
        home_p1: `VLS Official est une communauté pensée pour les personnes aimant écrire, lire, discuter et soutenir les projets des autres. Le serveur Discord est au cœur du projet, mais ce site sert de vitrine : il présente l’histoire de la communauté, son règlement général et les différentes équipes qui la font vivre.`,
        home_p2: `L’initiative « Venez Les Soutenir » est née en décembre 2025 avec une idée simple : offrir un espace bienveillant à tous les écrivains, débutants comme confirmés, peuvent partager leurs textes, recevoir des retours constructifs et trouver de la motivation. Au fil du temps, la communauté s’est élargie à la discussion générale, aux recommandations, aux projets créatifs et aux échanges du quotidien.`,
        home_p3: `Les règles présentées sur ce site s’appliquent sur le serveur Discord afin de garantir un cadre respectueux, sécurisé et agréable pour tous. Si tu as la moindre question, tu peux la poser directement sur le serveur : la FAQ de ce site rappelle que toute question peut être posée à l’équipe ou aux membres sur VLS Official.`
    },

    en: {
        home_p1: `VLS Official is a community designed for people who enjoy writing, reading, discussing and supporting each other’s projects. The Discord server is the heart of the project, but this website acts as a showcase: it presents the history of the community, its general rules and the different teams that keep it alive.`,
        home_p2: `The “Venez Les Soutenir” initiative was created in December 2025 with a simple idea: offer a kind space where writers, beginners and experienced alike, can share their texts, receive constructive feedback and find motivation. Over time, the community has expanded to general discussion, recommendations, creative projects and everyday exchanges.`,
        home_p3: `The rules presented on this site apply to the Discord server to guarantee a respectful, safe and pleasant environment for everyone. If you have any question, you can ask it directly on the server: the FAQ on this site reminds that any question can be asked to the team or members on VLS Official.`
    },

    es: {
        home_p1: `VLS Official es una comunidad pensada para quienes disfrutan escribir, leer, conversar y apoyar los proyectos de los demás.`,
        home_p2: `La iniciativa «Venez Les Soutenir» nació en diciembre de 2025 con una idea sencilla: ofrecer un espacio amable donde los escritores puedan compartir sus textos y recibir comentarios.`,
        home_p3: `Las reglas presentadas en este sitio se aplican en el servidor de Discord para garantizar un entorno respetuoso y seguro para todos.`
    },

    de: {
        home_p1: `VLS Official ist eine Community für Menschen, die gerne schreiben, lesen, diskutieren und Projekte anderer unterstützen.`,
        home_p2: `Die Initiative „Venez Les Soutenir“ entstand im Dezember 2025 mit der Idee, einen freundlichen Raum für Schreibende zu schaffen.`,
        home_p3: `Die hier vorgestellten Regeln gelten auch auf dem Discord‑Server und sorgen für ein respektvolles und sicheres Umfeld.`
    },

    zh: {
        home_p1: `VLS Official 是一个为喜欢写作、阅读和交流的人设计的社区。`,
        home_p2: `“Venez Les Soutenir” 项目于 2025 年 12 月创建，旨在为写作者提供一个友善的空间。`,
        home_p3: `本网站上的规则适用于 Discord 服务器，以确保一个安全、友好的环境。`
    },

    ar: {
        home_p1: `VLS Official هو مجتمع مخصص للأشخاص الذين يحبون الكتابة والقراءة والدعم المتبادل.`,
        home_p2: `تم إنشاء مبادرة «Venez Les Soutenir» في ديسمبر 2025 بهدف توفير مساحة لطيفة للكتّاب.`,
        home_p3: `تنطبق القواعد المعروضة هنا على خادم Discord لضمان بيئة محترمة وآمنة للجميع.`
    }
};

/* Appliquer les textes longs */
function applyLongTexts() {
    const t = longTexts[currentLang];

    document.querySelector("#page-home .content-box").innerHTML = `
        <p>${t.home_p1}</p>
        <p>${t.home_p2}</p>
        <p>${t.home_p3}</p>
    `;
}

/* ============================================================
   LIENS FIXES
   ============================================================ */

const LINK_VLS_DISCORD = "https://discord.gg/Zzz6uSj44M";

/* Bouton rejoindre VLS */
document.querySelector("#settings-join-vls").addEventListener("click", () => {
    window.open(LINK_VLS_DISCORD, "_blank");
});

/* ============================================================
   FINALISATION
   ============================================================ */

applyLongTexts();
applyTranslation();
updateTime();
