import resumeEs from '@/data/resume-es.json';
import resumeEn from '@/data/resume-en.json';
import { useTranslations } from '@/i18n/utils';

export function getPageData(langParam) {
  const lang = langParam === 'en' ? 'en' : 'es';
  const resume = lang === 'en' ? resumeEn : resumeEs;

  const { aboutMe, experience, knowledge } = resume;
  const { name, surnames, title, description, location } = aboutMe.profile;
  const { municipality, country } = location;
  const relevantLinks = aboutMe.relevantLinks ?? [];
  const emailUrl =
    (relevantLinks.find((l) => l.type === 'email') || {}).URL || '';
  const jobs = experience?.jobs ?? [];
  const studies = knowledge?.studies ?? [];
  const hardSkills = knowledge?.hardSkills ?? [];
  const fullname = `${name} ${surnames}`;

  return {
    lang,
    fullname,
    title,
    description,
    municipality,
    country,
    relevantLinks,
    emailUrl,
    jobs,
    studies,
    hardSkills,
    resume,
  };
}
