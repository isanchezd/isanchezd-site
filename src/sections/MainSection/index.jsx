import { HeadingItem } from '../../components/HeadingItem'
import { BlockItem } from '../../components/BlockItem'
import { TagItem } from '../../components/TagItem'

export function MainSection({
  summary,
  works,
  education,
  certificates,
  skills,
  languages,
}) {
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-three-fifths'>
            <div className='summary'>
              <HeadingItem title='DESCRIPCION'></HeadingItem>
              <div className='wrapper'>
                <p style={{ whiteSpace: 'pre-wrap' }}>{summary}</p>
              </div>
            </div>
            <div className='experience'>
              <HeadingItem title='EXPERIENCIA'></HeadingItem>
              {works.map((work, index) => (
                <BlockItem
                  key={index}
                  title={work.name}
                  subtitle={work.position}
                  startDate={work.startDate}
                  endDate={work.endDate}
                  description={work.summary}
                />
              ))}
            </div>

            <div className='education'>
              <HeadingItem title='EDUCACION'></HeadingItem>
              {education.map((degree, index) => (
                <BlockItem
                  key={index}
                  title={degree.institution}
                  subtitle={degree.studyType}
                  startDate={degree.startDate}
                />
              ))}
            </div>
          </div>
          <div className='column'>
            <div className='education'>
              <HeadingItem title='CERTIFICADOS'></HeadingItem>
              {certificates.map((certificate, index) => (
                <BlockItem
                  key={index}
                  title={certificate.issuer}
                  subtitle={certificate.name}
                  startDate={certificate.startDate}
                />
              ))}
            </div>
            <div className='skills'>
              <HeadingItem title='HABILIDADES'></HeadingItem>
              <div className='wrapper'>
                <div className='item is-flex is-flex-wrap-wrap is-flex-direction-row is-align-items-center'>
                  {skills.map((skill, index) => (
                    <TagItem
                      key={index}
                      text={skill.name}
                    ></TagItem>
                  ))}
                </div>
              </div>
            </div>

            <div className='languages'>
              <HeadingItem title='IDIOMAS'></HeadingItem>
              <div className='wrapper'>
                <div className='item'>
                  {languages.map((language, index) => (
                    <div key={index}>
                      {language.language}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
