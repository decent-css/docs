<template>

  <div class="flex">
    <!-- <div class="cbgg-black wp-100 fixed z-10" style="height: 2px;"></div> -->
    <aside class="w-8 p-4 fixed top-0 left-0">
      <main-nav />
    </aside>
    <main class="wp-100 pl-8">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import MainNav from '~components/layout/MainNav'

export default {
  components: {
    MainNav
  }
}
</script>
