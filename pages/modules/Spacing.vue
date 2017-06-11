<template>
  <article>
    <section class="maxw-12 mb-6">
      <h1 class="t-6 tw-semibold mt-5 mb-3">Spacing</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, tellus eu rutrum gravida, ante tortor vulputate est, id mollis ligula felis vel elit. Nam condimentum quis est ut faucibus.</p>
    </section>

    <h2 class="t-3 tw-semibold mb-3">Padding</h2>
    <section class="mb-4 ">
      <div v-for="step in scale" class="cbgg-8 b p-2 flex items-center mb-2">
        <div class="h-3 w-5 mr-2 flex items-center justify-center">
          <code class="tn-2">.p-{{ step }}</code>
        </div>
        <div :class="'p-' + step" class="cbg-primary rounded h-3"></div>
      </div>
    </section>

    <h2 class="t-3 tw-semibold mb-3">Margin</h2>
    <section class="">
      <div v-for="step in scale" class="cbgg-8 b p-2 flex items-center mb-2">
        <div class="h-3 w-5 mr-2 flex items-center justify-center">
          <code class="tn-2">.m-{{ step }}</code>
        </div>
        <div :class="'m-' + step" class="cbg-primary rounded h-3 w-3"></div>
      </div>
    </section>

    <section class="bt pt-6 mt-6">
      <h2 class="t-3 tw-semibold mb-4">Configuration</h2>
      <pre class="tn-1"><code>$modular-scale: (
  '0': 0,
  '1': 0.4rem,
  '2': 0.8rem,
  '3': 1.5rem,
  '4': 2.4rem,
  '5': 3rem,
  '6': 4rem,
  '7': 5rem,
  '8': 7rem,
  '9': 9rem,
  '10': 16rem,
  '11': 24rem,
  '12': 36rem
);</code></pre>
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
