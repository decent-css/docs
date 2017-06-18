<template>
  <div>
    <header class="fixed wp-100 cbgg-white z-4 bb">
      <div class="bb">
        <div class="flex container items-baseline">
          <div class="flex-grow h-7 py-3 px-3 sm-px-5 lg-px-8">
            <nuxt-link to="/" class="block hp-100">
              <img src="~assets/images/decent-logo.svg" class="hp-100" />
            </nuxt-link>
          </div>
          <nav class="mrn-2">
            <a href="https://github.com/decent-css/decent" class="p-2 tn-1">Github</a>
            <a href="https://www.npmjs.com/package/decent-scss" class="p-2 tn-1">NPM</a>
          </nav>
        </div>
      </div>
      <div class="container flex items-center h-6 py-2 cbgg-white o-auto">
        <nav class="mln-2 px-3 sm-px-5 lg-px-8">
          <main-nav-link name="Color" />
          <main-nav-link name="Display" />
          <main-nav-link name="Flexbox" />
          <main-nav-link name="Grid" />
          <main-nav-link name="Overlay" />
          <main-nav-link name="Length" />
          <main-nav-link name="Position" />
          <main-nav-link name="Ratio" />
          <main-nav-link name="Spacing" />
          <main-nav-link name="Style" />
          <main-nav-link name="Typography" />
          <!-- <nuxt-link to="/modules/interaction" class="p-2 c-primary-alt-2">Interaction</nuxt-link> -->
          <!-- <nuxt-link to="/modules/table" class="p-2 c-primary-alt-2">Table</nuxt-link> -->
        </nav>
      </div>
    </header>
    <div class="mb-7 h-6"><!-- Spacer --></div>
  </div>
</template>

<script>
import MainNavLink from '~components/layout/mainNav/MainNavLink'

export default {
  components: {
    MainNavLink
  }
}
</script>
