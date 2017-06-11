<template>
  <div>
    <div class="p-2 cbgg-8 rounded b mb-2">
      <div class="pb-2"><code class="tn-1">.{{ colorBgClass }}</code></div>
      <div class="wp-100 p-5 rounded" :class="[colorBgClass]"></div>
    </div>

    <div class="p-2 cbgg-8 b">
      <div class="pb-1"><code class="tn-1">.{{ colorTextClass }}</code></div>
      <div class="flex pt-2 wp-100">
        <span class="t-4 tw-semibold" :class="[colorTextClass]">Aa</span>
      </div>
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
    grey: {
      default: null,
      type: String
    }
  },

  computed: {
    colorBgClass () {
      if (this.color) {
        return 'cbg-' + this.color
      } else {
        return 'cbgg-' + this.grey
      }
    },

    colorTextClass () {
      if (this.color) {
        return 'c-' + this.color
      } else {
        return 'cg-' + this.grey
      }
    }
  }
}

</script>
