<template>
  <article>
    <page-heading title="Ratio"></page-heading>

    <section class="mb-4">
      <div class="flex items-start mln-2">
        <demo-block class="ml-2" class-name="ratio-1_2">
          <div class="w-9 cbg-primary ratio-1_2"></div>
        </demo-block>
        <demo-block class="ml-2" class-name="ratio-1_1">
          <div class="w-9 cbg-primary ratio-1_1"></div>
        </demo-block>
        <demo-block class="ml-2" class-name="ratio-4_3">
          <div class="w-9 cbg-primary ratio-4_3"></div>
        </demo-block>
        <demo-block class="ml-2" class-name="ratio-16_9">
          <div class="w-9 cbg-primary ratio-5_3"></div>
        </demo-block>
      </div>
    </section>

    <section class="mb-4">
      <div class="flex items-start mln-2">
        <demo-block class="ml-2" class-name="ratio-macbookpro15">
          <div class="w-12 cbg-primary ratio-macbookpro15"></div>
        </demo-block>
        <demo-block class="ml-2" class-name="ratio-iphone7">
          <div class="w-9 cbg-primary ratio-iphone7"></div>
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
