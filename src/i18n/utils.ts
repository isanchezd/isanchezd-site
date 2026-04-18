import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang
  return defaultLang;
}

export function useTranslations(lang: string | number) {
  return function t(key: string | number) {
    return ui[lang as keyof typeof ui][key as keyof typeof ui[keyof typeof ui]] || ui[defaultLang][key as keyof typeof ui[keyof typeof ui]];
  }
}