<template>
  <div class="p-2 cbgg-8 b">
    <div class="pb-2"><code class="tn-1">.{{ name }}</code></div>
    <p :class="name" class="t-1">{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    }
  }
}
</script>
