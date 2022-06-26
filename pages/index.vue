<template>
  <div>
    <header class="line has-background-primary"></header>

    <ProfileSection :full-name="data.basics.name" :profile="data.basics.label" :location="data.basics.location.address"
      :phone="data.basics.phone" :email="data.basics.email" :profiles="data.basics.profiles"></ProfileSection>

    <SectionSeparator></SectionSeparator>

    <MainSection :summary="data.basics.summary" :works="data.work" :education="data.education"
      :certificates="data.certificates" :skills="data.skills" :languages="data.languages">
    </MainSection>
  </div>
</template>

<script>
import data from 'isanchezd-resume/isanchezd-resume.json'

export default {
  name: "IndexPage",
  asyncData() {
    return { data }
  }
}
</script>
