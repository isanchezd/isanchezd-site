import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: { pathname: { split: (arg0: string) => [any, any]; }; }) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang
  return defaultLang;
}

export function useTranslations(lang: string | number) {
  return function t(key: string | number) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}