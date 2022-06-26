<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths">
          <div class="summary">
            <TitleItem title="DESCRIPCION"></TitleItem>
            <div class="wrapper">
              <p style="white-space: pre-wrap">{{ summary }}</p>
            </div>
          </div>
          <div class="experience">
            <TitleItem title="EXPERIENCIA"></TitleItem>
            <BlockItem v-for="work in works" :key="work.name" :title="work.name" :subtitle="work.position"
              :start-date="work.startDate" :end-date="work.endDate" :description="work.summary"></BlockItem>
          </div>

          <div class="education">
            <TitleItem title="EDUCACION"></TitleItem>
            <BlockItem v-for="degree in education" :key="degree.institution" :title="degree.institution"
              :subtitle="degree.studyType" :start-date="degree.startDate"></BlockItem>
          </div>
        </div>
        <div class="column">
          <div class="education">
            <TitleItem title="CERTIFICADOS"></TitleItem>
            <BlockItem v-for="certificate in certificates" :key="certificate.name" :title="certificate.issuer"
              :subtitle="certificate.name" :start-date="certificate.startDate"></BlockItem>
          </div>
          <div class="skills">
            <TitleItem title="HABILIDADES"></TitleItem>
            <div class="wrapper">
              <div class="item is-flex is-flex-wrap-wrap is-flex-direction-row is-align-items-center	">
                <TagItem v-for="skill in skills" :key="skill.name" :text="skill.name" class="m-1"></TagItem>
              </div>
            </div>
          </div>

          <div class="languages">
            <TitleItem title="IDIOMAS">
            </TitleItem>
            <div class="wrapper">
              <div class="item">
                <div v-for="language in languages" :key="language.language">
                  {{ language.language }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlockItem from './BlockItem/BlockItem'
import TitleItem from './TitleItem/TitleItem'
import TagItem from './TagItem/TagItem'

export default {
  components: {
    BlockItem,
    TitleItem,
    TagItem
  },
  props: {
    summary: {
      type: String,
      required: true
    },
    works: {
      type: Array,
      required: true
    },
    education: {
      type: Array,
      required: true
    },
    certificates: {
      type: Array,
      required: false,
      default: () => []
    },
    projects: {
      type: Array,
      required: false,
      default: () => []
    },
    skills: {
      type: Array,
      required: true,
      default: () => []
    },
    languages: {
      type: Array,
      required: true
    }
  }
}
</script>
