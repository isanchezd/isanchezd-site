import Head from 'next/head'

import { ProfileSection } from '../sections/ProfileSection'
import { MainSection } from '../sections/MainSection'

export default function Home(props) {
  const { basics, work, education, certificates, skills, languages } = props

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
import fsPromises from 'fs/promises'
import path from 'path'

export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    './node_modules/isanchezd-resume/isanchezd-resume.json'
  )
  const jsonData = await fsPromises.readFile(filePath)
  const objectData = JSON.parse(jsonData)

  return {
    props: objectData,
  }
}
