<template>
  <article>
    <section class="maxw-12 mb-6">
      <h1 class="t-6 tw-semibold mt-5 mb-3">Flexbox</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, tellus eu rutrum gravida, ante tortor vulputate est, id mollis ligula felis vel elit. Nam condimentum quis est ut faucibus.</p>
    </section>

    <section>
      <h2 class="t-3 tw-semibold mb-3">Container</h2>
      <div class="mxn-2 ta-center mb-4">
        <div class="cbgg-7 b p-2">
          <pre class="mb-2 tn-1"><code>.flex</code></pre>
          <div class="flex cg-white">
            <div class="p-1 m-1 flex-grow cbg-primary">1</div>
            <div class="p-1 m-1 flex-grow cbg-primary">2</div>
            <div class="p-1 m-1 flex-grow cbg-primary">3</div>
          </div>
        </div>
      </div>

      <h2 class="t-3 tw-semibold mb-3">Direction</h2>
      <div class="mxn-2 ta-center flex mb-4">
        <div class="col-6 mr-1">
          <div class="cbgg-7 b p-2">
            <pre class="mb-2 tn-1"><code>.flex-column</code></pre>
            <div class="flex flex-column mln-1 mbn-2 cg-white">
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">1</div>
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">2</div>
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">3</div>
            </div>
          </div>
        </div>

        <div class="col-6 ml-1">
          <div class="cbgg-7 b p-2">
            <pre class="mb-2 tn-1"><code>.flex-column-reverse</code></pre>
            <div class="flex flex-column-reverse mln-1 mbn-2 cg-white">
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">1</div>
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">2</div>
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">3</div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="t-3 tw-semibold mb-3">Wrap</h2>
      <div class="mxn-2 ta-center flex">
        <div class="col-6 mr-1">
          <div class="cbgg-7 b p-2">
            <pre class="mb-2 tn-1"><code>.flex-nowrap</code></pre>
            <div class="flex flex-nowrap mln-1 cg-white mbn-2">
              <div class="px-1 wp-50 mb-2"><div class="p-1 cbg-primary">1</div></div>
              <div class="px-1 wp-50 mb-2"><div class="p-1 cbg-primary">2</div></div>
              <div class="px-1 wp-50 mb-2"><div class="p-1 cbg-primary">3</div></div>
            </div>
          </div>
        </div>
        <div class="col-6 ml-1">
          <div class="cbgg-7 b p-2">
            <pre class="mb-2 tn-1"><code>.flex-wrap</code></pre>
            <div class="flex flex-wrap mln-1 cg-white mbn-2">
              <div class="px-1 wp-50 mb-2"><div class="p-1 cbg-primary">1</div></div>
              <div class="px-1 wp-50 mb-2"><div class="p-1 cbg-primary">2</div></div>
              <div class="px-1 wp-50 mb-2"><div class="p-1 cbg-primary">3</div></div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="t-3 tw-semibold mb-3">Align Items</h2>
      <h2 class="t-3 tw-semibold mb-3">Justify Content</h2>
      <h2 class="t-3 tw-semibold mb-3">Align Self</h2>
      <h2 class="t-3 tw-semibold mb-3">Justify Content</h2>
      
      <h2 class="t-3 tw-semibold mb-3">Order</h2>
    </section>
  </article>
</template>
