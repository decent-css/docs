<template>
  <div class="p-2 cbgg-8 b">
    <pre v-if="className" class="mb-2 tn-1 ta-center"><code>.{{ className }}</code></pre>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      required: false
    }
  }
}
</script>
