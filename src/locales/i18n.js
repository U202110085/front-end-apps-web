import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "fr",

  messages: {
    en: {
      username: "User",
      clickme: "Click me!",
    },

    es: {
      username: "Usuario",
      clickme: "Haz clic!",
    },

    fr: {
      username: "Utilisateur",
      clickme: "Cliquez sur moi!",
    },
  },

  // something vue-i18n options here ...
});

export default i18n;
