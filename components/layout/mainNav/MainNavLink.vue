<template>
  <nuxt-link :to="linkTo" class="p-2 c-primary-alt-2">{{ name }}</nuxt-link>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    }
  },

  computed: {
    linkTo () {
      return '/modules/' + this.name.toLowerCase()
    }
  }
}
</script>
