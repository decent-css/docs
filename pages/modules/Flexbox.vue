<template>
  <article>
    <page-heading title="Flexbox">
      <p>Flexbox is a great companion to f(css).</p>
    </page-heading>
    <section class="mb-6">
      <h2 class="t-3 tw-semibold mb-3">Container</h2>
      <div class="ta-center">
        <div class="cbgg-8 b p-2">
          <pre class="mb-2 tn-1"><code>.flex</code></pre>
          <div class="flex cg-white">
            <div class="p-1 m-1 flex-grow cbg-primary">1</div>
            <div class="p-1 m-1 flex-grow cbg-primary">2</div>
            <div class="p-1 m-1 flex-grow cbg-primary">3</div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-6">
      <h2 class="t-3 tw-semibold mb-3">Direction</h2>
      <div class="ta-center flex mb-4">
        <div class="col-6 mr-1">
          <div class="cbgg-8 b p-2">
            <pre class="mb-2 tn-1"><code>.flex-column</code></pre>
            <div class="flex flex-column mln-1 mbn-2 cg-white">
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">1</div>
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">2</div>
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">3</div>
            </div>
          </div>
        </div>

        <div class="col-6 ml-1">
          <div class="cbgg-8 b p-2">
            <pre class="mb-2 tn-1"><code>.flex-column-reverse</code></pre>
            <div class="flex flex-column-reverse mln-1 mbn-2 cg-white">
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">1</div>
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">2</div>
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">3</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-6">
      <h2 class="t-3 tw-semibold mb-3">Wrap</h2>
      <div class="ta-center flex">
        <div class="col-6 mr-1">
          <div class="cbgg-8 b p-2">
            <pre class="mb-2 tn-1"><code>.flex-nowrap</code></pre>
            <div class="flex flex-nowrap mln-1 cg-white mbn-2">
              <div class="px-1 wp-50 mb-2"><div class="p-1 cbg-primary">1</div></div>
              <div class="px-1 wp-50 mb-2"><div class="p-1 cbg-primary">2</div></div>
              <div class="px-1 wp-50 mb-2"><div class="p-1 cbg-primary">3</div></div>
            </div>
          </div>
        </div>
        <div class="col-6 ml-1">
          <div class="cbgg-8 b p-2">
            <pre class="mb-2 tn-1"><code>.flex-wrap</code></pre>
            <div class="flex flex-wrap mln-1 cg-white mbn-2">
              <div class="px-1 wp-50 mb-2"><div class="p-1 cbg-primary">1</div></div>
              <div class="px-1 wp-50 mb-2"><div class="p-1 cbg-primary">2</div></div>
              <div class="px-1 wp-50 mb-2"><div class="p-1 cbg-primary">3</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-6">
      <h2 class="t-3 tw-semibold mb-3">Align Items</h2>
      <div class="ta-center flex flex-wrap">
        <div class="col-4 p-1">
          <div class="cbgg-8 b p-2">
            <pre class="mb-2 tn-1"><code>.items-start</code></pre>
            <div class="flex items-start mln-1 cg-white mbn-2">
              <div class="px-1 flex-grow mb-2"><div class="p-1 cbg-primary">1</div></div>
              <div class="px-1 flex-grow mb-2"><div class="p-1 h-5 cbg-primary">2</div></div>
              <div class="px-1 flex-grow mb-2"><div class="p-1 h-6 cbg-primary">3</div></div>
            </div>
          </div>
        </div>
        <div class="col-4 p-1">
          <div class="cbgg-8 b p-2">
            <pre class="mb-2 tn-1"><code>.items-center</code></pre>
            <div class="flex items-center mln-1 cg-white mbn-2">
              <div class="px-1 flex-grow mb-2"><div class="p-1 cbg-primary">1</div></div>
              <div class="px-1 flex-grow mb-2"><div class="p-1 h-5 cbg-primary">2</div></div>
              <div class="px-1 flex-grow mb-2"><div class="p-1 h-6 cbg-primary">3</div></div>
            </div>
          </div>
        </div>
        <div class="col-4 p-1">
          <div class="cbgg-8 b p-2">
            <pre class="mb-2 tn-1"><code>.items-end</code></pre>
            <div class="flex items-end mln-1 cg-white mbn-2">
              <div class="px-1 flex-grow mb-2"><div class="p-1 cbg-primary">1</div></div>
              <div class="px-1 flex-grow mb-2"><div class="p-1 h-5 cbg-primary">2</div></div>
              <div class="px-1 flex-grow mb-2"><div class="p-1 h-6 cbg-primary">3</div></div>
            </div>
          </div>
        </div>
        <div class="col-6 p-1">
          <div class="cbgg-8 b p-2">
            <pre class="mb-2 tn-1"><code>.items-baseline</code></pre>
            <div class="flex items-baseline mln-1 cg-white mbn-2">
              <div class="px-1 flex-grow mb-2"><div class="p-1 pt-2 cbg-primary">1</div></div>
              <div class="px-1 flex-grow mb-2"><div class="p-1 h-5 cbg-primary">2</div></div>
              <div class="px-1 flex-grow mb-2"><div class="p-1 h-6 cbg-primary">3</div></div>
            </div>
          </div>
        </div>
        <div class="col-6 p-1">
          <div class="cbgg-8 b p-2">
            <pre class="mb-2 tn-1"><code>.items-stretch</code></pre>
            <div class="flex items-stretch mln-1 cg-white mbn-2">
              <div class="mx-1 px-1 py-1 flex-grow mb-2 cbg-primary">1</div>
              <div class="mx-1 px-1 pt-1 pb-2 flex-grow mb-2 cbg-primary">2</div>
              <div class="mx-1 px-1 pt-1 pb-4 flex-grow mb-2 cbg-primary">3</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-6">
      <h2 class="t-3 tw-semibold mb-3">Justify Content</h2>
      <div class="ta-center flex flex-wrap">
        <div class="col-4 p-1">
          <div class="cbgg-8 b p-2">
            <pre class="mb-2 tn-1"><code>.justify-start</code></pre>
            <div class="flex justify-start mln-1 cg-white mbn-2">
              <div class="px-1 mb-2"><div class="px-3 py-1 cbg-primary">1</div></div>
              <div class="px-1 mb-2"><div class="px-3 py-1 h-5 cbg-primary">2</div></div>
              <div class="px-1 mb-2"><div class="px-3 py-1 h-6 cbg-primary">3</div></div>
            </div>
          </div>
        </div>
        <div class="col-4 p-1">
          <div class="cbgg-8 b p-2">
            <pre class="mb-2 tn-1"><code>.justify-center</code></pre>
            <div class="flex justify-center mln-1 cg-white mbn-2">
              <div class="px-1 mb-2"><div class="px-3 py-1 cbg-primary">1</div></div>
              <div class="px-1 mb-2"><div class="px-3 py-1 h-5 cbg-primary">2</div></div>
              <div class="px-1 mb-2"><div class="px-3 py-1 h-6 cbg-primary">3</div></div>
            </div>
          </div>
        </div>
        <div class="col-4 p-1">
          <div class="cbgg-8 b p-2">
            <pre class="mb-2 tn-1"><code>.justify-end</code></pre>
            <div class="flex justify-end mln-1 cg-white mbn-2">
              <div class="px-1 mb-2"><div class="px-3 py-1 cbg-primary">1</div></div>
              <div class="px-1 mb-2"><div class="px-3 py-1 h-5 cbg-primary">2</div></div>
              <div class="px-1 mb-2"><div class="px-3 py-1 h-6 cbg-primary">3</div></div>
            </div>
          </div>
        </div>
        <div class="col-6 p-1">
          <div class="cbgg-8 b p-2">
            <pre class="mb-2 tn-1"><code>.justify-between</code></pre>
            <div class="flex justify-between mln-1 cg-white mbn-2">
              <div class="px-1 mb-2"><div class="px-3 py-1 pt-2 cbg-primary">1</div></div>
              <div class="px-1 mb-2"><div class="px-3 py-1 h-5 cbg-primary">2</div></div>
              <div class="px-1 mb-2"><div class="px-3 py-1 h-6 cbg-primary">3</div></div>
            </div>
          </div>
        </div>
        <div class="col-6 p-1">
          <div class="cbgg-8 b p-2">
            <pre class="mb-2 tn-1"><code>.justify-around</code></pre>
            <div class="flex justify-around mln-1 cg-white mbn-2">
              <div class="px-1 mb-2"><div class="px-3 py-1 pt-2 cbg-primary">1</div></div>
              <div class="px-1 mb-2"><div class="px-3 py-1 h-5 cbg-primary">2</div></div>
              <div class="px-1 mb-2"><div class="px-3 py-1 h-6 cbg-primary">3</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-6">
      <h2 class="t-3 tw-semibold mb-3">Order</h2>
      <div class="ta-center">

        <div class="flex">
          <div class="flex-grow flex-order-4 cbgg-8 b p-1 mx-1">
            <pre class="mb-2 tn-1"><code>.flex-order-4</code></pre>
            <div class="flex cg-white">
              <div class="p-1 m-1 flex-grow cbg-primary">1</div>
            </div>
          </div>
          <div class="flex-grow flex-order-2 cbgg-8 b p-1 mx-1">
            <pre class="mb-2 tn-1"><code>.flex-order-2</code></pre>
            <div class="flex cg-white">
              <div class="p-1 m-1 flex-grow cbg-primary">2</div>
            </div>
          </div>
          <div class="flex-grow flex-order-1 cbgg-8 b p-1 mx-1">
            <pre class="mb-2 tn-1"><code>.flex-order-1</code></pre>
            <div class="flex cg-white">
              <div class="p-1 m-1 flex-grow cbg-primary">3</div>
            </div>
          </div>
          <div class="flex-grow flex-order-3 cbgg-8 b p-1 mx-1">
            <pre class="mb-2 tn-1"><code>.flex-order-3</code></pre>
            <div class="flex cg-white">
              <div class="p-1 m-1 flex-grow cbg-primary">4</div>
            </div>
          </div>
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
