<template>
  <section class="profile section">
    <div class="container">
      <div class="columns">
        <div class="column is-two-fifths">
          <h1 class="title is-size-1">
            {{ fullName }}
          </h1>
          <p class="subtitle">
            {{ profile }}
          </p>
        </div>
        <div class="column is-2">
          <figure class="image image is-128x128">
            <img alt="Profile photo" class="is-rounded" src="~/assets/profile.webp" style="height:8rem" />
          </figure>
        </div>
        <div class="column has-text-grey-light has-text-right-in-desktop">
          <p class="has-text-weight-light">
            {{ location }}
          </p>
          <p class="has-text-weight-light">
            {{ phone }}
          </p>
          <p class="has-text-weight-light">
            {{ email }}
          </p>

          <SocialIcons :profiles="profiles"></SocialIcons>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialIcons from './SocialIcons/SocialIcons.vue'

export default {
  components: {
    SocialIcons
  },
  props: {
    fullName: {
      type: String,
      required: true
    },
    profile: {
      type: String,
      required: true
    },
    location: {
      type: String,
      default: '-'
    },
    phone: {
      type: String,
      default: '-'
    },
    email: {
      type: String,
      required: true
    },
    profiles: {
      type: Array,
      required: true
    }
  }
}
</script>
