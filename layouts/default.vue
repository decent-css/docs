<template>

  <div class="flex">
    <aside class="col-2 px-3 py-3 fixed top-0 left-0">

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
          <a href="#" class="d-block py-1 mtn-1">Color</a>
          <a href="#" class="d-block py-1 mtn-1">Display</a>
          <a href="#" class="d-block py-1 mtn-1">Flexbox</a>
          <a href="#" class="d-block py-1 mtn-1">Grid</a>
          <a href="#" class="d-block py-1 mtn-1">Overlay</a>
          <a href="#" class="d-block py-1 mtn-1">Interaction</a>
          <a href="#" class="d-block py-1 mtn-1">Length</a>
          <a href="#" class="d-block py-1 mtn-1">Reset</a>
          <a href="#" class="d-block py-1 mtn-1">Spacing</a>
          <a href="#" class="d-block py-1 mtn-1">Style</a>
          <a href="#" class="d-block py-1 mtn-1">Table</a>
          <a href="#" class="d-block py-1 mtn-1">Typography</a>
        </div>
        <div class="mb-3">
          <p class="tn-3 uppercase tracked mb-2">Resources</p>
          <a href="#" class="d-block py-1 mtn-1">Examples</a>
        </div>

      </nav>
    </aside>
    <main class="push-2 col-8 p-6 pt-8">
      <!-- Nuxt view -->
      <nuxt/>
    </main>
  </div>
</template>
