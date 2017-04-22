<template>

  <div>
    <div class="b mb-2">
      <div class="wp-100 p-5" :class="[colorBgClass]"></div>
      <div class="cbgg-white p-1"><code class="tn-1">.{{ colorBgClass }}</code></div>
    </div>

    <div class="b">
      <div class="flex pt-2 pb-1 px-3 wp-100 cbgg-white bb">
        <span class="t-4 tw-semibold" :class="[colorTextClass]">Aa</span>
      </div>
      <div class="cbgg-white p-1"><code class="tn-1">.{{ colorTextClass }}</code></div>
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
      type: String
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
