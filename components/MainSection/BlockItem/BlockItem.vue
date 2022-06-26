<template>
  <div class="item">
    <div class="is-size-5">
      <b>
        {{ title }},
      </b>
      <span class="has-text-weight-semi-bold">
        <i>{{ subtitle }}</i>
      </span>
    </div>
    <TagItem :text="initDate + finishDate">
    </TagItem>
    <div>
      {{ description }}
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'
import TagItem from '../TagItem/TagItem'

const DATE_FORMAT = 'dd-MM-yyyy'

export default {
  name: 'BlockItem',
  components: {
    TagItem
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: false,
      default: () => ''
    },
    description: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      initDate: format(new Date(this.startDate), DATE_FORMAT),
      finishDate: this.endDate ? ` - ${format(new Date(this.endDate), DATE_FORMAT)}` : ''
    }
  }
}
</script>
