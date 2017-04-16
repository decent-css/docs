<template>

  <article>

    <block>
      <div slot="main" class="pt-8">
        <h1 class="t-4 mb-1">Flexbox</h1>
        <p class="cg-3 antialiased">Flexbox is</p>
      </div>
    </block>

    <block class="bb-7">
      <div slot="main" class="pr-5 pb-5">
        <div class="flex mln-1">
          <div class="demo-block h-7 flex-grow mx-1"></div>
          <div class="demo-block h-7 flex-grow mx-1"></div>
          <div class="demo-block h-7 flex-grow mx-1"></div>
        </div>
      </div>
      <div slot="code">
        <pre><code>&lt;div class="flex">
    &lt;div class="flex-grow mx-1">&lt;/div>
    &lt;div class="flex-grow mx-1">&lt;/div>
    &lt;div class="flex-grow mx-1">&lt;/div>
  &lt;/div></code></pre>
      </div>
    </block>

    <!-- Align Items -->
    <block>
      <div slot="main">
        <h2 class="t-2 mb-2 pt-5">Align Items</h2>
      </div>
    </block>

    <block>
      <div slot="main" class="pr-5">
        <div class="flex items-start mln-1">
          <div class="demo-block h-6 flex-grow mx-1"></div>
          <div class="demo-block h-7 flex-grow mx-1"></div>
          <div class="demo-block h-5 flex-grow mx-1"></div>
        </div>
      </div>
      <div slot="code">
        <pre><code>&lt;div class="flex items-start">
    &lt;div class="flex-grow mx-1">&lt;/div>
    &lt;div class="flex-grow mx-1">&lt;/div>
    &lt;div class="flex-grow mx-1">&lt;/div>
  &lt;/div></code></pre>
      </div>
    </block>

    <block>
      <div slot="main" class="pr-5">
        <div class="flex items-center mln-1">
          <div class="demo-block h-6 flex-grow mx-1"></div>
          <div class="demo-block h-7 flex-grow mx-1"></div>
          <div class="demo-block h-5 flex-grow mx-1"></div>
        </div>
      </div>
      <div slot="code">
        <pre><code>&lt;div class="flex items-center">
    &lt;div class="flex-grow mx-1">&lt;/div>
    &lt;div class="flex-grow mx-1">&lt;/div>
    &lt;div class="flex-grow mx-1">&lt;/div>
  &lt;/div></code></pre>
      </div>
    </block>

    <block>
      <div slot="main" class="pr-5">
        <div class="flex items-end mln-1">
          <div class="demo-block h-6 flex-grow mx-1"></div>
          <div class="demo-block h-7 flex-grow mx-1"></div>
          <div class="demo-block h-5 flex-grow mx-1"></div>
        </div>
      </div>
      <div slot="code">
        <pre><code>&lt;div class="flex items-end">
    &lt;div class="flex-grow mx-1">&lt;/div>
    &lt;div class="flex-grow mx-1">&lt;/div>
    &lt;div class="flex-grow mx-1">&lt;/div>
  &lt;/div></code></pre>
      </div>
    </block>

    <block>
      <div slot="main" class="pr-5">
        <div class="flex items-stretch mln-1">
          <div class="demo-block py-4 flex-grow mx-1"></div>
          <div class="demo-block py-5 flex-grow mx-1"></div>
          <div class="demo-block py-4 flex-grow mx-1"></div>
        </div>
      </div>
      <div slot="code">
        <pre><code>&lt;div class="flex items-stretch">
    &lt;div class="flex-grow py-4 mx-1">&lt;/div>
    &lt;div class="flex-grow py-5 mx-1">&lt;/div>
    &lt;div class="flex-grow py-1 mx-1">&lt;/div>
  &lt;/div></code></pre>
      </div>
    </block>

  </article>


</template>

<script>
import Block from '~components/layout/Block'

export default {
  components: {
    Block,
  }
}

</script>
