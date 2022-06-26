<template>
  <div class="tag is-primary">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'TagItem',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>
