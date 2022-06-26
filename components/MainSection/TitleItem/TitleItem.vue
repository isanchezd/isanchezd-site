<template>
  <div class="title is-size-5 has-text-primary has-text-weight-bold">
    {{ title }}
  </div>
</template>

<script>

export default {
  name: 'TitleItem',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
