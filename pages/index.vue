<template>
  <section class="container">
    <div class="pb-3 mb-5 bb-7">
      <h1 class="t-5 tw-semibold mb-2">Flexbox</h1>
      <p>Flexbox is an extraordinarly powerful – and flexible – method for creating layouts.</p>
    </div>

    <div class="mb-5">
      <h2 class="t-3 tw-semibold mb-1">Container Classes</h2>
      <p>Properties on a flexbox container are able to dictate the behavior of its direct descendants.</p>
    </div>

    <div class="flex mb-3">
      <div class="col-3">
        <code>.flex</code>
      </div>
      <div class="col-9">
        <div class="cbgg-8 p-3 wp-100 flex-grow">
          <div class="flex mln-1">
            <div class="demo-block flex-grow h-5 px-4 mx-1"></div>
            <div class="demo-block flex-grow h-5 px-4 mx-1"></div>
            <div class="demo-block flex-grow h-5 px-4 mx-1"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <h3 class="t-2">Align Items</h3>
    </div>

    <div class="flex mb-2">
      <div class="col-3 pr-3">
        <code>.items-start</code>
      </div>
      <div class="col-9">
        <div class="cbgg-8 p-3 wp-100 flex-grow">
          <div class="flex items-start mln-1">
            <div class="demo-block flex-grow h-2 px-4 mx-1"></div>
            <div class="demo-block flex-grow h-5 px-4 mx-1"></div>
            <div class="demo-block flex-grow h-4 px-4 mx-1"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex mb-2">
      <div class="col-3">
        <code>.items-end</code>
      </div>
      <div class="col-9">
        <div class="cbgg-8 p-3 wp-100 flex-grow">
          <div class="flex items-end mln-1">
            <div class="demo-block flex-grow h-2 px-4 mx-1"></div>
            <div class="demo-block flex-grow h-5 px-4 mx-1"></div>
            <div class="demo-block flex-grow h-4 px-4 mx-1"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex mb-2">
      <div class="col-3">
        <code>.items-center</code>
      </div>
      <div class="col-9">
        <div class="cbgg-8 p-3 wp-100 flex-grow">
          <div class="flex items-center mln-1">
            <div class="demo-block flex-grow h-2 px-4 mx-1"></div>
            <div class="demo-block flex-grow h-5 px-4 mx-1"></div>
            <div class="demo-block flex-grow h-4 px-4 mx-1"></div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">

code {
  background: #f2f3f5;
  padding: 0.55rem 0.55rem 0.4rem 0.4rem;
  border-radius: 1px;
  line-height: 1;
}

.demo-block {
  background: #ff7d10;
  border-radius: 1px;
  box-shadow: 0 4px 8px -2px rgba(0,0,0,0.1);

  background: red; /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(-45deg, #ff7d10 50%, darken(#ff7d10, 5%) 70%); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(-45deg, #ff7d10 50%, darken(#ff7d10, 5%) 70%); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(-45deg, #ff7d10 50%, darken(#ff7d10, 5%) 70%); /* For Firefox 3.6 to 15 */
  background: linear-gradient(-45deg, #ff7d10 50%, darken(#ff7d10, 5%) 70%); /* Standard syntax */
}
</style>
