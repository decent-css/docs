<template>
  <article>
    <section class="maxw-12 mb-6">
      <h1 class="t-6 tw-semibold mt-5 mb-3">Length</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, tellus eu rutrum gravida, ante tortor vulputate est, id mollis ligula felis vel elit. Nam condimentum quis est ut faucibus.</p>
    </section>
    <section>
      <h2 class="t-3 tw-semibold mb-3">Fixed Lengths</h2>
      <div class="table b mb-4 wp-100">
        <div class="table-row">
          <div class="table-cell cbgg-8 br bb pt-2 pb-1 pl-2 pr-4">
            Identifier
          </div>
          <div class="table-cell cbgg-8  br bb pt-2 pb-1 pl-2 pr-4">
            Values
          </div>
          <div class="table-cell cbgg-8 bb pt-2 pb-1 pl-2 pr-6">
            Description
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell br bb p-2">
            <code class="code">w</code>
          </div>
          <div class="table-cell br bb p-2">
            <code class="code">0</code> - <code class="code">12</code>
          </div>
          <div class="table-cell tn-1 bb p-2">Width</div>
        </div>
        <div class="table-row">
          <div class="table-cell br p-2">
            <code class="code">h</code>
          </div>
          <div class="table-cell br p-2">
            <code class="code">0</code> - <code class="code">12</code>
          </div>
          <div class="table-cell tn-1 p-2">Height</div>
        </div>
      </div>

      <div class="o-auto mb-4">
        <div v-for="step in scale" class="cbgg-8 b p-2 flex items-center mb-2">
          <div class="h-3 w-6 pl-1 mr-2 flex items-center justify-start">
            <code class="tn-2">.w-{{ step }}</code>
          </div>
          <div :class="'w-' + step" class="cbg-primary rounded h-3"></div>
        </div>
      </div>

      <h2 class="t-3 tw-semibold mb-3">Percent Lengths</h2>
      <div class="table b wp-100 mb-4">
        <div class="table-row">
          <div class="table-cell cbgg-8 br bb pt-2 pb-1 pl-2 pr-4">
            Identifier
          </div>
          <div class="table-cell cbgg-8  br bb pt-2 pb-1 pl-2 pr-4">
            Values
          </div>
          <div class="table-cell cbgg-8 bb pt-2 pb-1 pl-2 pr-6">
            Description
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell br bb p-2">
            <code class="code">wp</code>
          </div>
          <div class="table-cell br bb p-2">
            <code class="code">0</code>,
            <code class="code">10</code>,
            <code class="code">20</code>,
            <code class="code">30</code>,
            <code class="code">40</code>,
            <code class="code">50</code>,
            <code class="code">60</code>,
            <code class="code">70</code>,
            <code class="code">80</code>,
            <code class="code">90</code>,
            <code class="code">100</code>
          </div>
          <div class="table-cell tn-1 bb p-2">Percent Width</div>
        </div>
        <div class="table-row">
          <div class="table-cell br p-2">
            <code class="code">hp</code>
          </div>
          <div class="table-cell br p-2">
            <code class="code">0</code>,
            <code class="code">10</code>,
            <code class="code">20</code>,
            <code class="code">30</code>,
            <code class="code">40</code>,
            <code class="code">50</code>,
            <code class="code">60</code>,
            <code class="code">70</code>,
            <code class="code">80</code>,
            <code class="code">90</code>,
            <code class="code">100</code>
          </div>
          <div class="table-cell tn-1 p-2">Percent Height</div>
        </div>
      </div>

      <div class="">
        <div v-for="step in percentageScale" class="cbgg-8 b p-2 flex items-center mb-2">
          <div class="h-3 w-6 pl-1 mr-2 flex items-center justify-start">
            <code class="tn-2">.wp-{{ step }}</code>
          </div>
          <div :class="'wp-' + step" class="cbg-primary rounded h-3"></div>
        </div>
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
);

$percentage-scale: (
  '0':   0,
  '10':  10%,
  '20':  20%,
  '30':  30%,
  '40':  40%,
  '50':  50%,
  '60':  60%,
  '70':  70%,
  '80':  80%,
  '90':  90%,
  '100': 100%,
);</code></pre>
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
