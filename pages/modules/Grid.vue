<template>
  <article>
    <section class="maxw-12 mb-6">
      <h1 class="t-6 tw-semibold mt-5 mb-3">Grid</h1>
      <p>This grid does <em>not</em> float by default!</p>
    </section>

    <section class="mb-6">
      <div class="ta-center ">
        <div class="clearfix mln-2 mb-2">
          <div class="col-6 pl-2">
            <div class="cbgg-8 b p-2">
              <pre class="pb-2"><code class="tn-1">.col-6</code></pre>
              <div class="cbg-primary h-4"></div>
            </div>
          </div>
          <div class="col-6 pl-2">
            <div class="cbgg-8 b p-2">
              <pre class="pb-2"><code class="tn-1">.col-6</code></pre>
              <div class="cbg-primary h-4"></div>
            </div>
          </div>
        </div>

        <div class="clearfix mln-2 mbn-2">
          <div class="lg-col-4 pl-2 mb-2">
            <div class="cbgg-8 b p-2">
              <pre class="pb-2"><code class="tn-1">.lg-col-4</code></pre>
              <div class="cbg-primary h-4"></div>
            </div>
          </div>
          <div class="lg-col-4 pl-2 mb-2">
            <div class="cbgg-8 b p-2">
              <pre class="pb-2"><code class="tn-1">.lg-col-4</code></pre>
              <div class="cbg-primary h-4"></div>
            </div>
          </div>
          <div class="lg-col-4 pl-2 mb-2">
            <div class="cbgg-8 b p-2">
              <pre class="pb-2"><code class="tn-1">.lg-col-4</code></pre>
              <div class="cbg-primary h-4"></div>
            </div>
          </div>
        </div>

        <div class="clearfix mln-2 mbn-2">
          <div class="md-col-2 pl-2 mb-2">
            <div class="cbgg-8 b p-2">
              <pre class="pb-2"><code class="tn-1">.md-col-2</code></pre>
              <div class="cbg-primary h-4"></div>
            </div>
          </div>
          <div class="md-col-2 pl-2 mb-2">
            <div class="cbgg-8 b p-2">
              <pre class="pb-2"><code class="tn-1">.md-col-2</code></pre>
              <div class="cbg-primary h-4"></div>
            </div>
          </div>
          <div class="md-col-2 pl-2 mb-2">
            <div class="cbgg-8 b p-2">
              <pre class="pb-2"><code class="tn-1">.md-col-2</code></pre>
              <div class="cbg-primary h-4"></div>
            </div>
          </div>
          <div class="md-col-2 pl-2 mb-2">
            <div class="cbgg-8 b p-2">
              <pre class="pb-2"><code class="tn-1">.md-col-2</code></pre>
              <div class="cbg-primary h-4"></div>
            </div>
          </div>
          <div class="md-col-2 pl-2 mb-2">
            <div class="cbgg-8 b p-2">
              <pre class="pb-2"><code class="tn-1">.md-col-2</code></pre>
              <div class="cbg-primary h-4"></div>
            </div>
          </div>
          <div class="md-col-2 pl-2 mb-2">
            <div class="cbgg-8 b p-2">
              <pre class="pb-2"><code class="tn-1">.md-col-2</code></pre>
              <div class="cbg-primary h-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bt pt-6">
      <h2 class="t-3 tw-semibold mb-4">Configuration</h2>
      <pre class="tn-1"><code>$container-width: 90rem;
$columns: 12;</code></pre>
    </section>
  </article>
</template>

<script>
import Wrapper from '~components/layout/Wrapper'

export default {
  components: {
    Wrapper
  }
}
</script>
