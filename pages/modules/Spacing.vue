<template>
  <article>
    <section class="maxw-12 mb-6">
      <h1 class="t-6 tw-semibold mt-5 mb-3">Spacing</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, tellus eu rutrum gravida, ante tortor vulputate est, id mollis ligula felis vel elit. Nam condimentum quis est ut faucibus.</p>
    </section>

    <section class="mb-4 mxn-2">
      <div v-for="step in scale" class="cbgg-7 p-2 flex items-center mb-2">
        <div class="h-3 w-5 mr-2 flex items-center justify-center">
          <code class="tn-2">.p-{{ step }}</code>
        </div>
        <div :class="'p-' + step" class="cbg-primary rounded h-3"></div>
      </div>
    </section>

    <section class="mxn-2">
      <div v-for="step in scale" class="cbgg-7 p-2 flex items-center mb-2">
        <div class="h-3 w-5 mr-2 flex items-center justify-center">
          <code class="tn-2">.m-{{ step }}</code>
        </div>
        <div :class="'m-' + step" class="cbg-primary rounded h-3 w-3"></div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  computed: {
    scale () {
      let array = []
      for (var i = 0; i <= 8; i++) {
        array.push(i)
      }
      return array
    }
  }
}
</script>
