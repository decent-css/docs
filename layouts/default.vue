<template>
  <div>
    <main-nav />
    <main>
      <wrapper>
        <nuxt/>
      </wrapper>
    </main>
  </div>
</template>

<script>
import MainNav from '~components/layout/MainNav'
import Wrapper from '~components/layout/Wrapper'

export default {
  components: {
    MainNav,
    Wrapper,
  }
}
</script>
