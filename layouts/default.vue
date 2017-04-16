<template>

  <div class="flex">
    <aside class="col-2 px-4 py-4 fixed top-0 left-0 br-7">

      <div class="mb-4">
        <div class="mb-3">
          <div class="flex h-3 mb-2">
            <img src="~assets/images/decent-logo.svg" class="hp-100" />
          </div>
          <!-- <p class="tn-2 cg-4 uppercase tracked">A Functional CSS Library</p> -->
        </div>
      </div>
      <nav >
        <div class="mb-3">
          <p class="tn-3 uppercase tracked mb-2">Essentials</p>
          <a href="#" class="d-block py-1 mtn-1">Introduction</a>
          <a href="#" class="d-block py-1 mtn-1">Getting Started</a>
        </div>
        <div class="mb-3">
          <p class="tn-3 uppercase tracked mb-2">Modules</p>
          <nuxt-link to="/modules/color" class="d-block py-1 mtn-1">Color</nuxt-link>
          <nuxt-link to="/modules/display" class="d-block py-1 mtn-1">Display</nuxt-link>
          <nuxt-link to="/modules/flexbox" class="d-block py-1 mtn-1">Flexbox</nuxt-link>
          <nuxt-link to="/modules/grid" class="d-block py-1 mtn-1">Grid</nuxt-link>
          <nuxt-link to="/modules/overlay" class="d-block py-1 mtn-1">Overlay</nuxt-link>
          <nuxt-link to="/modules/interaction" class="d-block py-1 mtn-1">Interaction</nuxt-link>
          <nuxt-link to="/modules/length" class="d-block py-1 mtn-1">Length</nuxt-link>
          <nuxt-link to="/modules/reset" class="d-block py-1 mtn-1">Reset</nuxt-link>
          <nuxt-link to="/modules/spacing" class="d-block py-1 mtn-1">Spacing</nuxt-link>
          <nuxt-link to="/modules/style" class="d-block py-1 mtn-1">Style</nuxt-link>
          <nuxt-link to="/modules/table" class="d-block py-1 mtn-1">Table</nuxt-link>
          <nuxt-link to="/modules/typography" class="d-block py-1 mtn-1">Typography</nuxt-link>
        </div>
        <div class="mb-3">
          <p class="tn-3 uppercase tracked mb-2">Resources</p>
          <a href="#" class="d-block py-1 mtn-1">Examples</a>
        </div>

      </nav>
    </aside>
    <main class="push-2 col-10 pl-5">
      <!-- Nuxt view -->
      <nuxt/>
    </main>
  </div>
</template>
