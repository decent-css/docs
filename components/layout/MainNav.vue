<template>
  <div>
    <header class="fixed wp-100 cbgg-white z-4 shadow">
      <div class="py-3 px-3 sm-px-5 lg-px-8 h-7 bb">
        <nuxt-link to="/" class="block hp-100">
          <img src="~assets/images/decent-logo.svg" class="hp-100" />
        </nuxt-link>
      </div>
      <div class="flex items-center h-6 py-2 cbgg-white o-auto">
        <nav class="mln-2 px-3 sm-px-5 lg-px-8">
          <nuxt-link to="/modules/color" class="p-2 c-primary-alt-2">Color</nuxt-link>
          <nuxt-link to="/modules/flexbox" class="p-2 c-primary-alt-2">Flexbox</nuxt-link>
          <nuxt-link to="/modules/grid" class="p-2 c-primary-alt-2">Grid</nuxt-link>
          <nuxt-link to="/modules/overlay" class="p-2 c-primary-alt-2">Overlay</nuxt-link>
          <nuxt-link to="/modules/interaction" class="p-2 c-primary-alt-2">Interaction</nuxt-link>
          <nuxt-link to="/modules/length" class="p-2 c-primary-alt-2">Length</nuxt-link>
          <nuxt-link to="/modules/spacing" class="p-2 c-primary-alt-2">Spacing</nuxt-link>
          <nuxt-link to="/modules/style" class="p-2 c-primary-alt-2">Style</nuxt-link>
          <nuxt-link to="/modules/table" class="p-2 c-primary-alt-2">Table</nuxt-link>
          <nuxt-link to="/modules/typography" class="p-2 c-primary-alt-2">Typography</nuxt-link>
        </nav>
      </div>
    </header>
    <div class="mb-7 h-6"><!-- Spacer --></div>
  </div>
</template>
