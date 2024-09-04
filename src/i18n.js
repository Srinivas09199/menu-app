import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: "Home",
      movies: "Movies",
      tvShows: "TV Shows",
      sports: "Sports",
      live: "Live"
    }
  },
  fr: {
    translation: {
      home: "Accueil",
      movies: "Films",
      tvShows: "Émissions de télévision",
      sports: "Sports",
      live: "En direct"
    }
  },
  de: {
    translation: {
      home: "Startseite",
      movies: "Filme",
      tvShows: "Fernsehsendungen",
      sports: "Sport",
      live: "Live"
    }
  },
  ru: {
    translation: {
      home: "Главная",
      movies: "Фильмы",
      tvShows: "Телешоу",
      sports: "Спорт",
      live: "Прямой эфир"
    }
  },
  es: {
    translation: {
      home: "Inicio",
      movies: "Películas",
      tvShows: "Programas de TV",
      sports: "Deportes",
      live: "En vivo"
    }
  },
  zh: {
    translation: {
      home: "首页",
      movies: "电影",
      tvShows: "电视剧",
      sports: "体育",
      live: "直播"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
