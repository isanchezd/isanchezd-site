<template>
  <div class="social-icon">
    <a :href="social.url" target="_blank" :class="social.network.toLowerCase()" :title="social.network">
      {{ social.username }}
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialIcon',
  props: {
    social: {
      type: Object,
      required: true,
    }
  }
}
</script>
