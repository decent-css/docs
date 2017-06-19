<template>
  <article>
    <section class="bb pb-3 mb-5">
      <div class="col-7 mb-4">
        <h1 class="t-6 tw-semibold pr-6 mb-4">A Flexible, Functional CSS Library for Building Literally Anything</h1>
        <p class="t-1">Designed to be flexible and configurable, Decent can be used for building anything from prototypes to production applications and websites.</p>
      </div>
      <div>
        <a href="https://www.npmjs.com/package/decent-scss">
          <img class="mr-2" src="https://camo.githubusercontent.com/d8acfc5636ad990672b4415868c9304366cafb72/68747470733a2f2f62616467652e667572792e696f2f6a732f646563656e742d736373732e737667" alt="npm version" data-canonical-src="https://badge.fury.io/js/decent-scss.svg" style="max-width:100%;">
        </a>
        <a class="mr-2" href="https://circleci.com/gh/decent-css/decent" target="_top">
          <img src="https://camo.githubusercontent.com/afb040c158824da81053af2e15362ab4748ad382/68747470733a2f2f636972636c6563692e636f6d2f67682f646563656e742d6373732f646563656e742e706e673f636972636c652d746f6b656e3d30646363366363343162363462626633626538616266663661653964303038323364636632393535267374796c653d736869656c64" alt="CircleCI Status" data-canonical-src="https://circleci.com/gh/decent-css/decent.png?circle-token=0dcc6cc41b64bbf3be8abff6ae9d00823dcf2955&amp;style=shield" style="max-width:100%;">
        </a>
        <!-- Place this tag where you want the button to render. -->
        <!-- <a class="github-button" href="https://github.com/decent-css/decent" data-show-count="true" aria-label="Star decent-css/decent on GitHub">Star</a> -->
      </div>
    </section>

    <section class="mb-5">
      <h2 class="t-4 tw-semibold mb-3">Getting Started</h2>
      <div class="mb-4">
        <h3 class="t-1 tw-semibold mb-2">Install Decent.</h3>
        <div class="code-block">
          <pre><code>$ npm install decent-scss</code></pre>
        </div>
      </div>

      <div class="mb-4">
        <h3 class="t-1 tw-semibold mb-2">Include Decent in your build.</h3>
        <div class="code-block">
          <pre><code>@import 'decent-scss/modules/all';</code></pre>
        </div>
      </div>

      <div class="mb-4">
        <div class="col-7 mb-3">
          <h3 class="t-1 tw-semibold mb-2">Configure Decent to work with your design.</h3>
          <p>Import a settings file above Decent in your build.</p>
        </div>
        <div class="code-block">
          <pre><code>@import 'settings'; <br><span class="cg-4 antialiased">@import 'decent-scss/modules/all';</span></code></pre>
        </div>
      </div>
    </section>

    <section class="mb-5">
      <h2 class="t-4 tw-semibold mb-3">How it Works</h2>
      <div class="col-7">
        <p class="mb-2">The only assumption Decent makes is that we can't assume anything. Everyone has different requirements and preferences, that's why we have opted to make our framework as flexible as possible – down to the classnames.</p>
        <p class="mb-2">The goal of our defaults is to provide an example of how to configure your Decent – giving you a starting point to just start building. As your design evolves, you can change colors, typography scale, styles, and available spacing and length increments to work for you.</p>
        <p class="mb-2">Functional CSS – f(css) – work especially well with component-based frameworks just as React and Vue. If you find yourself duplicated classes on an element, odds are that element should become a component in your application.</p>
      </div>
    </section>

    <!-- <section class="mb-5">
      <h2 class="t-4 tw-semibold mb-3">Responsive</h2>
      <p>Control over classnames, increments, and values.</p>
    </section> -->

    <!-- <section class="flex mln-3">
      <div class="p-3">
        <p class="t-3 tw-semibold">~16<span class="t-1">kb</span></p>
        <p>Minified and gzipped.</p>
      </div>
      <div class="p-3">
        <p class="t-3 tw-semibold">Configurable</span></p>
        <p>Down to the class name.</p>
      </div>
      <div class="p-3">
        <p class="t-3 tw-semibold">Tested</span></p>
        <p></p>
      </div> -->
    </section>

    <!--
      - Makes designing in the browser possible.
      - 16kb minified and gzipped.

      - Why functional works:
        - modularization of components.
        - class binding for interactions.
    -->
  </article>
</template>

<script>
export default {
  components: {
  }
}
</script>
