<template>
  <section class="maxw-12 mb-6">
    <h1 class="t-6 tw-semibold mt-5 mb-3">{{ title }}</h1>
    <p><slot></slot></p>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    }
  }
}
</script>
