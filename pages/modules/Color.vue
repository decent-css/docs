<template>

  <article class="container py-9 px-8">

    <section class="maxw-12 mb-6">
      <h1 class="t-6 tw-semibold mt-5 mb-3">Color</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, tellus eu rutrum gravida, ante tortor vulputate est, id mollis ligula felis vel elit. Nam condimentum quis est ut faucibus.</p>
    </section>

    <section>
      <div v-for="colorGroup in colorGroups" class="flex mln-2 mb-5">
        <div v-for="color in colorGroup" class="col-3 pl-2">
          <color-swatch :color="color" />
        </div>
      </div>
    </section>

    <aside class="d-none absolute hp-100 pt-9 w-12 top-0 right-0 z-1">
      <div class="fixed zn-1 wp-100 hp-100 cbgg-7"></div>
      <div class="flex wp-100 hp-100">
        <div class="flex pt-11 wp-100 p-4">
          <pre class="tn-1 mb-2"><code>$colorsets: (
  'primary': (
    'default': hsl(240, 90, 50),
    'alt':      hsl(240, 90, 40),
    'alt-2':    hsl(240, 90, 30)
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
) !default;

$greyscale: (
  'black': hsl(240, 0, 0),
  '1':     hsl(240, 10, 10),
  '2':     hsl(240, 8, 24),
  '3':     hsl(240, 6, 40),
  '4':     hsl(240, 5, 50),
  '5':     hsl(240, 4, 70),
  '6':     hsl(240, 3, 80),
  '7':     hsl(240, 2, 92),
  '8':     hsl(240, 1, 96),
  'white': hsl(240, 0, 100)
);
<div class="h-5"></div>
</code></pre>
        </div>
      </div>
    </aside>
  </article>

</template>

<script>
import ColorSwatch from '~components/ColorSwatch'

export default {
  components: {
    ColorSwatch,
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
        ]
      ]
    }
  }

}
</script>
