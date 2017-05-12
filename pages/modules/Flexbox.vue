<template>
  <article>
    <section class="maxw-12 mb-6">
      <h1 class="t-6 tw-semibold mt-5 mb-3">Flexbox</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, tellus eu rutrum gravida, ante tortor vulputate est, id mollis ligula felis vel elit. Nam condimentum quis est ut faucibus.</p>
    </section>
    <section>
      <div class="mxn-2 ta-center mb-4">
        <div class="cbgg-7 p-2">
          <pre class="mb-2 tn-1"><code>.flex</code></pre>
          <div class="flex cg-white">
            <div class="p-1 m-1 flex-grow cbg-primary">1</div>
            <div class="p-1 m-1 flex-grow cbg-primary">2</div>
            <div class="p-1 m-1 flex-grow cbg-primary">3</div>
          </div>
        </div>
      </div>

      <div class="b p-2 mxn-2 ta-center flex">
        <div class="col-6">
          <div class="cbgg-7 p-2">
            <pre class="mb-2 tn-1"><code>.flex-column</code></pre>
            <div class="flex flex-column mln-1 cg-white">
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">1</div>
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">2</div>
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">3</div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="cbgg-7 p-2">
            <pre class="mb-2 tn-1"><code>.flex-column-reverse</code></pre>
            <div class="flex flex-column-reverse mln-1 cg-white">
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">1</div>
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">2</div>
              <div class="p-1 mx-1 flex-grow cbg-primary mb-2">3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>
