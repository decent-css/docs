<template>
  <article>
    <section class="maxw-12 mb-6">
      <h1 class="t-6 tw-semibold mt-5 mb-3">Color</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, tellus eu rutrum gravida, ante tortor vulputate est, id mollis ligula felis vel elit. Nam condimentum quis est ut faucibus.</p>
    </section>
    <section>
      <div v-for="colorGroup in colorGroups" class="flex flex-wrap mln-2 mb-5">
        <div v-for="color in colorGroup" class="col-6 md-col-3 pl-2">
          <color-swatch :color="color" class="mb-2"/>
        </div>
      </div>
    </section>
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
