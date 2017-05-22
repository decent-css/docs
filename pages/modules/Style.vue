<template>
  <article>
    <section class="maxw-12 mb-6">
      <h1 class="t-6 tw-semibold mt-5 mb-3">Style</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, tellus eu rutrum gravida, ante tortor vulputate est, id mollis ligula felis vel elit. Nam condimentum quis est ut faucibus.</p>
    </section>

    <h2 class="t-3 tw-semibold mb-3">Shadow</h2>
    <section class="p-2 cbgg-7 b mb-4 mxn-2">
      <div class="flex mln-2">
        <div class="p-4 ml-2 flex-grow cbgg-white shadow"></div>
        <div class="p-4 ml-2 flex-grow cbgg-white shadow-diffused"></div>
      </div>
    </section>

    <h2 class="t-3 tw-semibold mb-3">Border Radius</h2>
    <section class="p-2 cbgg-7 b mxn-2">
      <div class="flex mln-2">
        <div class="w-5 h-5 ml-2 cbgg-3 rounded"></div>
        <div class="w-5 h-5 ml-2 cbgg-3 rounded-more"></div>
      </div>
    </section>


    <section class="bt pt-6 mt-6">
      <h2 class="t-3 tw-semibold mb-4">Configuration</h2>
      <pre class="tn-1"><code>$border-radii: (
  'default': 2px
);

$shadows: (
  'default': 0 1px 8px rgba(0, 0, 0, 0.1),
  'diffused':  0 2px 16px rgba(0, 0, 0, 0.1)
);</code></pre>
    </section>
  </article>
</template>
