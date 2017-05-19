<template>
  <article>
    <section class="maxw-12 mb-6">
      <h1 class="t-6 tw-semibold mt-5 mb-3">Typography</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, tellus eu rutrum gravida, ante tortor vulputate est, id mollis ligula felis vel elit. Nam condimentum quis est ut faucibus.</p>
    </section>

    <section>
      <h2 class="t-3 tw-semibold mb-3">Size</h2>
      <div class="mxn-2 mb-4">
        <div v-for="size in fontSizes">
          <div class="cbgg-7 b p-2 mb-1">
            <p v-if="size >= 0" :class="'t-' + size">Heading</p>
            <p v-else :class="'tn' + size">Heading</p>
          </div>
        </div>
      </div>

      <h2 class="t-3 tw-semibold mb-3">Weight</h2>
      <div class="cbgg-7 b p-2 mxn-2 mb-4">
        <p class="tw-bold">Bold</p>
        <p class="tw-semibold">Semibold</p>
        <p class="tw-regular">Regular</p>
      </div>

      <h2 class="t-3 tw-semibold mb-3">Alignment</h2>
      <div class="cbgg-7 b p-2 mxn-2 mb-4">
        <div class="cbgg-white b py-1 px-2 mb-1 ta-left">
          <p>Left</p>
        </div>
        <div class="cbgg-white b py-1 px-2 mb-1 ta-center">
          <p>Center</p>
        </div>
        <div class="cbgg-white b py-1 px-2 mb-1 ta-right">
          <p>Right</p>
        </div>
      </div>

      <h2 class="t-3 tw-semibold mb-3">Style</h2>
      <div class="mxn-2">
        <div class="flex mln-1">
          <div class="p-2 cbgg-7 b mx-1">
            <p class="underline">Underline</p>
          </div>
          <div class="p-2 cbgg-7 b mx-1">
            <p class="line-through">Line-through</p>
          </div>
          <div class="p-2 cbgg-7 b mx-1">
            <p class="italic">Italic</p>
          </div>
          <div class="p-2 cbgg-7 b mx-1">
            <p class="uppercase">Uppercase</p>
          </div>
          <div class="p-2 cbgg-7 b mx-1">
            <p class="capitalize">Capitalize</p>
          </div>
          <div class="p-2 cbgg-7 b mx-1">
            <p class="lowercase">Lowercase</p>
          </div>
        </div>
        <!-- <p class="nowrap">Nowrap</p> -->
      </div>
    </section>

  </article>
</template>

<script>
export default {
  data () {
    return {
      fontSizes: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3]
    }
  }
}
</script>
