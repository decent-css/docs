<template>
  <article>
    <section>
      <h2 class="t-3 tw-semibold mb-3">Relative, Absolute, Fixed</h2>
    </section>

    <section class="mb-4">
      <h2 class="t-3 tw-semibold mb-3">Coordinates</h2>
      <div class="flex mln-2">
        <demo-block class="col-3 ml-2" class-name="top-0.left-0">
          <div class="relative h-9">
            <div class="absolute top-0 left-0 w-8 h-6 cbg-primary"></div>
          </div>
        </demo-block>
        <demo-block class="col-3 ml-2" class-name="top-0.right-0">
          <div class="relative h-9">
            <div class="absolute top-0 right-0 w-8 h-6 cbg-primary"></div>
          </div>
        </demo-block>
        <demo-block class="col-3 ml-2" class-name="bototm-0.left-0">
          <div class="relative h-9">
            <div class="absolute bottom-0 left-0 w-8 h-6 cbg-primary"></div>
          </div>
        </demo-block>
        <demo-block class="col-3 ml-2" class-name="bototm-0.right-0">
          <div class="relative h-9">
            <div class="absolute bottom-0 right-0 w-8 h-6 cbg-primary"></div>
          </div>
        </demo-block>
      </div>
    </section>

    <section>
      <h2 class="t-3 tw-semibold mb-3">Translate</h2>
      <div class="">
        <demo-block class-name="origin-center">
          <div class="relative h-9">
            <div class="absolute origin-center top-50 left-50 w-8 h-6 cbg-primary"></div>
          </div>
        </demo-block>
      </div>
    </section>
  </article>
</template>

<script>
import PageHeading from '~components/layout/PageHeading'
import DemoBlock from '~components/layout/DemoBlock'

export default {
  components: {
    PageHeading,
    DemoBlock,
  },
}
</script>
