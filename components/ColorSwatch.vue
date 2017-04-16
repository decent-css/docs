<template>
  <div class="flex items-center">
    <div class="col-6 flex items-center">
      <div class="h-4 wp-25 rounded mr-1" :class="[colorBgClass]"></div>
      <p><code class="code">.{{ colorBgClass }}</code></p>
    </div>
    <div class="col-6 flex items-center ">
      <div class="t-5 mr-1" :class="[colorTextClass]">Aa</div>
      <p><code class="code">.{{ colorTextClass }}</code></p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    color: {
      default: null,
      type: String
    },
    greyscale: {
      default: null,
      type: Boolean
    }
  },

  computed: {
    colorBgClass () {
      if (this.color) {
        return 'cbg-' + this.color
      } else {
        return 'cbgg-' + this.greyscale
      }
    },

    colorTextClass () {
      if (this.color) {
        return 'c-' + this.color
      } else {
        return 'cg-' + this.greyscale
      }
    }
  }
}

</script>
