<template>
  <article>
    <page-heading title="Color">
      Colors are split into two categories – <em>colorsets</em> and <em>greyscale</em>
    </page-heading>

    <section>
      <div v-for="colorGroup in colorGroups" class="flex flex-wrap mln-2 mb-5">
        <div v-for="color in colorGroup" class="w-10 md-col-3 pl-2">
          <color-swatch :color="color" class="mb-2"/>
        </div>
      </div>
      <div class="flex flex-wrap mln-2 mb-5">
        <div v-for="grey in greyscale" class="w-10 md-col-3 pl-2">
          <color-swatch :grey="grey" class="mb-2"/>
        </div>
      </div>
    </section>

    <section class="bt pt-6">
      <h2 class="t-3 tw-semibold mb-4">Configuration</h2>
      <pre class="tn-1"><code>$colorsets: (
  'primary': (
    'default':  hsl(240, 90, 50),
    'alt':      hsl(240, 90, 40),
    'alt-2':    hsl(240, 90, 30),
    'alt-3':    hsl(240, 90, 20)
  ),
  'secondary': (
    'default':  hsl(27, 100, 53),
    'alt':      hsl(27, 100, 43)
  ),
  'success': (
    'default':  hsl(122, 90, 50),
    'alt':      hsl(122, 90, 40),
    'alt-2':    hsl(122, 90, 30)
  ),
  'error': (
    'default':  hsl(0, 90, 50),
    'alt':      hsl(0, 90, 40),
    'alt-2':    hsl(0, 90, 30)
  )
);

$greyscale: (
  'black': hsl(240, 1, 1),
  '1':     hsl(240, 4, 10),
  '2':     hsl(240, 3, 24),
  '3':     hsl(240, 3, 30),
  '4':     hsl(240, 2, 40),
  '5':     hsl(240, 2, 50),
  '6':     hsl(240, 2, 84),
  '7':     hsl(240, 1, 92),
  '8':     hsl(240, 1, 96),
  'white': hsl(240, 0, 99)
);</code></pre>
    </section>
  </article>
</template>

<script>
import PageHeading from '~components/layout/pageHeading'
import ColorSwatch from '~components/ColorSwatch'

export default {
  components: {
    ColorSwatch,
    PageHeading,
  },

  data () {
    return {
      colorGroups: [
        [
          'primary',
          'primary-alt',
          'primary-alt-2',
          'primary-alt-3'
        ],
        [
          'secondary',
          'secondary-alt',
          'secondary-alt-2'
        ],
        [
          'success',
          'success-alt',
          'success-alt-2'
        ],
        [
          'error',
          'error-alt',
          'error-alt-2'
        ],
      ],

      greyscale: [
          'black', '1', '2', '3', '4', '5', '6', '7', '8', 'white'
      ]
    }
  }

}
</script>
