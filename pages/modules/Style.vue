<template>
  <article>
    <h2 class="t-3 tw-semibold mb-3">Shadow</h2>

    <section class="flex mln-2 mb-4">
      <demo-block class="ml-2" class-name="shadow">
        <div class="p-8 m-2 cbgg-white shadow"></div>
      </demo-block>
      <demo-block class="ml-2" class-name="shadow-diffused">
        <div class="p-8 m-2 cbgg-white shadow-diffused"></div>
      </demo-block>
    </section>

    <h2 class="t-3 tw-semibold mb-3">Border Radius</h2>

    <section class="flex mln-2 mb-4">
      <demo-block class="ml-2" class-name="rounded">
        <div class="w-9 h-9 cbg-primary rounded"></div>
      </demo-block>
      <demo-block class="ml-2" class-name="rounded-more">
        <div class="w-9 h-9 cbg-primary rounded-more"></div>
      </demo-block>
    </section>


    <section class="bt pt-6 mt-6">
      <h2 class="t-3 tw-semibold mb-4">Configuration</h2>
      <pre class="tn-1"><code>$border-radii: (
  'default': 2px,
  'more':    4px
);

$shadows: (
  'default': 0 1px 8px rgba(0, 0, 0, 0.1),
  'diffused':  0 2px 16px rgba(0, 0, 0, 0.1)
);</code></pre>
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
  }
}
</script>
