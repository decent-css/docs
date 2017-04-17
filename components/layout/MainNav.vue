<template>
  <nav>
    <div class="mb-6">
      <nuxt-link to="/" class="block h-4 mb-2">
        <img src="~assets/images/decent-logo.svg" class="hp-100" />
      </nuxt-link>
      <p class="tn-3 cg-3">1.0.2</p>
        <!-- <p class="tn-2 cg-4 uppercase tracked">A Functional CSS Library</p> -->
    </div>

    <div class="mb-4">
      <p class="tn-3 display mb-2">Essentials</p>
      <a href="/" class="d-block cg-black py-1">Introduction</a>
      <a href="#" class="d-block cg-black py-1">Getting Started</a>
    </div>
    <div class="mb-4">
      <p class="tn-3 display mb-2">Modules</p>
      <nuxt-link to="/modules/color" class="d-block cg-black py-1">Color</nuxt-link>
      <nuxt-link to="/modules/display" class="d-block cg-black py-1">Display</nuxt-link>
      <nuxt-link to="/modules/flexbox" class="d-block cg-black py-1">Flexbox</nuxt-link>
      <nuxt-link to="/modules/grid" class="d-block cg-black py-1">Grid</nuxt-link>
      <nuxt-link to="/modules/overlay" class="d-block cg-black py-1">Overlay</nuxt-link>
      <nuxt-link to="/modules/interaction" class="d-block cg-black py-1">Interaction</nuxt-link>
      <nuxt-link to="/modules/length" class="d-block cg-black py-1">Length</nuxt-link>
      <nuxt-link to="/modules/spacing" class="d-block cg-black py-1">Spacing</nuxt-link>
      <nuxt-link to="/modules/style" class="d-block cg-black py-1">Style</nuxt-link>
      <nuxt-link to="/modules/table" class="d-block cg-black py-1">Table</nuxt-link>
      <nuxt-link to="/modules/typography" class="d-block cg-black py-1">Typography</nuxt-link>
    </div>
    <div class="mb-4">
      <p class="tn-3 display mb-2">Resources</p>
      <a href="#" class="d-block cg-black py-1">Examples</a>
    </div>
  </nav>
</template>
