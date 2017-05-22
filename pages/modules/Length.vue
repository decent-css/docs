<template>
  <article>
    <section class="maxw-12 mb-6">
      <h1 class="t-6 tw-semibold mt-5 mb-3">Length</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, tellus eu rutrum gravida, ante tortor vulputate est, id mollis ligula felis vel elit. Nam condimentum quis est ut faucibus.</p>
    </section>
    <section>
      <h2 class="t-3 tw-semibold mb-3">Fixed Widths</h2>

      <div class="table b wp-100 mxn-2 mb-4">
        <div class="table-row">
          <div class="table-cell p-2">
            <code>w</code>
          </div>
          <div class="table-cell p-2">
            <code>0</code> - <code>12</code>
          </div>
          <div class="table-cell p-2">
            <code>Width</code>
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell p-2">
            <code>h</code>
          </div>
          <div class="table-cell p-2">
            <code>0</code> - <code>12</code>
          </div>
          <div class="table-cell p-2">
            <code>Height</code>
          </div>
        </div>
      </div>

      <div class="o-auto mxn-2 mb-4">
        <div v-for="step in scale" class="cbgg-7 p-2 flex items-center mb-2">
          <div class="h-3 w-6 pl-1 mr-2 flex items-center justify-start">
            <code class="tn-2">.w-{{ step }}</code>
          </div>
          <div :class="'w-' + step" class="cbg-primary rounded h-3"></div>
        </div>
      </div>

      <h2 class="t-3 tw-semibold mb-3">Percent Widths</h2>
      <div class="mxn-2">

        <div v-for="step in percentageScale" class="cbgg-7 p-2 flex items-center mb-2">
          <div class="h-3 w-6 pl-1 mr-2 flex items-center justify-start">
            <code class="tn-2">.wp-{{ step }}</code>
          </div>
          <div :class="'wp-' + step" class="cbg-primary rounded h-3"></div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  computed: {
    scale () {
      let array = []
      for (var i = 0; i <= 12; i++) {
        array.push(i)
      }
      return array
    }
  },

  data () {
    return {
      percentageScale: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    }
  }
}
</script>
