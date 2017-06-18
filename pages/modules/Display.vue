<template>
  <article>
    <page-heading title="Display">
    </page-heading>

    <section>
      <h2 class="t-3 tw-semibold mb-3">Display</h2>
      <div class="table b mb-4 wp-100">
        <div class="table-row">
          <div class="table-cell cbgg-8 br bb pt-2 pb-1 pl-2 pr-4">
            Identifier
          </div>
          <div class="table-cell cbgg-8 bb pt-2 pb-1 pl-2 pr-6">
            Description
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell br bb p-2">
            <code class="code">hide</code>
          </div>
          <div class="table-cell tn-1 bb p-2">Completely hide an element using <code class="code">display: none</code>.</div>
        </div>
        <div class="table-row">
          <div class="table-cell br bb p-2">
            <code class="code">hide-accessible</code>
          </div>
          <div class="table-cell tn-1 bb p-2">Hide an element visually, but allow it to be read by screen readers.</div>
        </div>
        <div class="table-row">
          <div class="table-cell br bb p-2">
            <code class="code">inline</code>
          </div>
          <div class="table-cell tn-1 bb p-2">Display an element inline.</div>
        </div>
        <div class="table-row">
          <div class="table-cell br bb p-2">
            <code class="code">inline-block</code>
          </div>
          <div class="table-cell tn-1 bb p-2">Display an element as an inline block.</div>
        </div>
        <div class="table-row">
          <div class="table-cell br bb p-2">
            <code class="code">block</code>
          </div>
          <div class="table-cell tn-1 bb p-2">Display an element as a block.</div>
        </div>
        <div class="table-row">
          <div class="table-cell br p-2">
            <code class="code">flex</code>
          </div>
          <div class="table-cell tn-1 p-2">Display an element as a flexbox. See <nuxt-link to="flexbox">Flexbox</nuxt-link></div>
        </div>
      </div>
    </section>

    <section class="mb-4">
      <h2 class="t-3 tw-semibold mb-3">Overflow</h2>
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
          <div class="table-cell br p-2">
            <code class="code">o</code>
          </div>
          <div class="table-cell br p-2">
            <code class="code">auto</code>, <code class="code">visible</code>, <code class="code">hidden</code>
          </div>
          <div class="table-cell tn-1 p-2">Width</div>
        </div>
      </div>
    </section>

    <section class="mb-4">
      <h2 class="t-3 tw-semibold mb-3">Float</h2>
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
            <code class="code">f</code>
          </div>
          <div class="table-cell br bb p-2">
            <code class="code">left</code>, <code class="code">right</code>, <code class="code">none</code>
          </div>
          <div class="table-cell tn-1 bb p-2">Width</div>
        </div>
        <div class="table-row">
          <div class="table-cell br p-2">
            <code class="code">clearfix</code>
          </div>
          <div class="table-cell br p-2">-</div>
          <div class="table-cell tn-1 p-2">Height</div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import PageHeading from '~components/layout/PageHeading'

export default {
  components: {
    PageHeading,
  }
}
</script>
