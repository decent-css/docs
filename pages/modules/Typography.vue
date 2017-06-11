<template>
  <article>
    <section class="maxw-12 mb-6">
      <h1 class="t-6 tw-semibold mt-5 mb-3">Typography</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, tellus eu rutrum gravida, ante tortor vulputate est, id mollis ligula felis vel elit. Nam condimentum quis est ut faucibus.</p>
    </section>

    <section>
      <h2 class="t-3 tw-semibold mb-3">Size</h2>
      <div class="mb-4">
        <div v-for="size in fontSizes">
          <div class="flex items-baseline cbgg-8 b p-2 mb-1">
            <div class="w-7 px-2 mr-2">
              <code v-if="size >= 0" class="tn-1">.{{ 't-' + size }}</code>
              <code v-else class="tn-1">.{{ 'tn' + size }}</code>
            </div>
            <div>
              <p v-if="size >= 0" :class="'t-' + size">Heading</p>
              <p v-else :class="'tn' + size">Heading</p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="t-3 tw-semibold mb-3">Weight</h2>
      <div class="mb-4">
        <div class="flex mln-1">
          <div class="p-2 cbgg-8 b mx-1">
            <p class="tw-bold">Bold</p>
          </div>
          <div class="p-2 cbgg-8 b mx-1">
            <p class="tw-semibold">Semibold</p>
          </div>
          <div class="p-2 cbgg-8 b mx-1">
            <p class="tw-regular">Regular</p>
          </div>
        </div>
      </div>

      <h2 class="t-3 tw-semibold mb-3">Alignment</h2>
      <div class="cbgg-8 b p-2 mb-4">
        <div class="cbgg-white b p-2 mb-1 ta-left">
          <p>Left</p>
        </div>
        <div class="cbgg-white b p-2 mb-1 ta-center">
          <p>Center</p>
        </div>
        <div class="cbgg-white b p-2 mb-1 ta-right">
          <p>Right</p>
        </div>
      </div>

      <h2 class="t-3 tw-semibold mb-3">Style</h2>
      <div class="mb-6">
        <div class="flex mln-2">
          <div class="col-3 pl-2" v-for="style in typeStyles">
            <type-style :name="style" />
          </div>
        </div>
      </div>
    </section>

    <section class="bt pt-6">
      <h2 class="t-3 tw-semibold mb-4">Configuration</h2>
      <pre class="tn-1"><code>$rem-base:  16px;
$ratio: 1.5;

$typesets: (
  default: (
    font-family: ('Proxima Nova', Arial, sans-serif),
    font-weight: 400,
    line-height-body: 1.6,
    line-height-heading: 1.2,
    text-transform: none,
    letter-spacing: 0
  ),
  display: (
    font-family: ('Cormorant Garamond', Georgia, serif),
    font-weight: 400,
    line-height: 1.2,
    text-transform: uppercase,
    letter-spacing: 0.1em
  ),
  monospace: (
    font-family: (Courier, monospace),
    font-weight: 400,
    line-height: 1.2,
    text-transform: none,
    letter-spacing: 0
  )
);

$font-weights: (
  'regular': 400,
  'semibold': 500,
  'bold': 700
);</code></pre>
  </section>

  </article>
</template>

<script>
import TypeStyle from '~components/TypeStyle'

export default {
  components: {
    TypeStyle
  },

  data () {
    return {
      fontSizes: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3],
      typeStyles: [
        'underline',
        'line-through',
        'italic',
        'uppercase',
        'capitalize',
        'lowercase'
      ]
    }
  }
}
</script>
