<template>
  <article>
    <section class="maxw-12 mb-6">
      <h1 class="t-6 tw-semibold mt-5 mb-3">Grid</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, tellus eu rutrum gravida, ante tortor vulputate est, id mollis ligula felis vel elit. Nam condimentum quis est ut faucibus.</p>
    </section>
    <section>
      <div class="ta-center mxn-2">
        <div class="clearfix mln-2 mb-2">
          <div class="col-6 pl-2">
            <div class="cbgg-7 b p-2">
              <pre class="pb-2"><code class="tn-1">.col-6</code></pre>
              <div class="cbg-primary h-4"></div>
            </div>
          </div>
          <div class="col-6 pl-2">
            <div class="cbgg-7 b p-2">
              <pre class="pb-2"><code class="tn-1">.col-6</code></pre>
              <div class="cbg-primary h-4"></div>
            </div>
          </div>
        </div>
        <div class="clearfix mln-2 mb-2">
          <div class="md-col-4 pl-2">
            <div class="cbgg-7 b p-2">
              <pre class="pb-2"><code class="tn-1">.md-col-4</code></pre>
              <div class="cbg-primary h-4"></div>
            </div>
          </div>
          <div class="md-col-4 pl-2">
            <div class="cbgg-7 b p-2">
              <pre class="pb-2"><code class="tn-1">.md-col-4</code></pre>
              <div class="cbg-primary h-4"></div>
            </div>
          </div>
          <div class="md-col-4 pl-2">
            <div class="cbgg-7 b p-2">
              <pre class="pb-2"><code class="tn-1">.md-col-4</code></pre>
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
