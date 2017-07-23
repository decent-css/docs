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

<style lang="scss" scoped>
.nuxt-link-active {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    bottom: 0.1rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: hsl(240, 90, 50);
  }

}
</style>
