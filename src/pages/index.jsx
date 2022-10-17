import Head from 'next/head'

import { ProfileSection } from '../sections/ProfileSection'
import { MainSection } from '../sections/MainSection'

import resume from 'isanchezd-resume/isanchezd-resume.json';


export default function Home() {
  const { basics, work, education, certificates, skills, languages } = resume

  return (
    <>
      <Head>
        <title>Isanchezd</title>
        <meta name='description' content='isanchezd portfolio site' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <header className='line has-background-primary'></header>

        <ProfileSection
          fullName={basics.name}
          profile={basics.label}
          location={basics.location.address}
          phone={basics.phone}
          email={basics.email}
          profiles={basics.profiles}
        ></ProfileSection>

        <div className='hr'></div>

        <MainSection
          summary={basics.summary}
          works={work}
          education={education}
          certificates={certificates}
          skills={skills}
          languages={languages}
        ></MainSection>
      </div>
    </>
  );
}

