<template>

  <article>
    <block>
      <div slot="main" class="pt-8 pb-4 ">
        <h1 class="t-5 tw-semibold mb-2">Color</h1>
        <p class="cg-3 mb-1">Decent doesn't make any assumptions about what colors you may need. With generic names such as <span>primary</span> and <span>secondary</span>, adjustments can be made globally without the need for an extensive search and replace effort.</p>

        <p class="cg-3">Each color namespace is comprised of a list, so each color can have an unlimited number of alternatives. The greyscale also works in this way, allowing for an unlimited number of grey shades – of course, we recommend using a reasonable number of shades for ease of use and consistency.</p>
      </div>
    </block>

    <block>
      <div slot="main" class="pb-5">
        <color-swatch color="primary" />
        <color-swatch color="primary-alt" />
        <color-swatch color="primary-alt-2" />
        <color-swatch color="primary-alt-3" />

        <color-swatch color="secondary" />
        <color-swatch color="secondary-alt" />
        <color-swatch color="secondary-alt-2" />

        <color-swatch color="success" />
        <color-swatch color="success-alt" />
        <color-swatch color="success-alt-2" />

        <color-swatch color="warning" />
        <color-swatch color="warning-alt" />
        <color-swatch color="warning-alt-2" />

        <color-swatch color="error" />
        <color-swatch color="error-alt" />
        <color-swatch color="error-alt-2" />

        <color-swatch greyscale="black" />
        <color-swatch greyscale="1" />
        <color-swatch greyscale="2" />
        <color-swatch greyscale="3" />
        <color-swatch greyscale="4" />
        <color-swatch greyscale="5" />
        <color-swatch greyscale="6" />
        <color-swatch greyscale="7" />
        <color-swatch greyscale="8" />
        <color-swatch greyscale="white" />
      </div>
      <div slot="code">
        <pre><code>$color-primary:     hsl(27, 100, 53)
                    hsl(27, 100, 43)
                    hsl(27, 100, 43)
                    hsl(27, 100, 43);

$color-secondary:   hsl(27, 100, 53)
                    hsl(27, 100, 43)
                    hsl(27, 100, 43);

$color-success:     hsl(27, 100, 53)
                    hsl(27, 100, 43)
                    hsl(27, 100, 43);

$color-warning:     hsl(27, 100, 53)
                    hsl(27, 100, 43)
                    hsl(27, 100, 43);

$color-error:       hsl(27, 100, 53)
                    hsl(27, 100, 43)
                    hsl(27, 100, 43);

$greyscale:         hsl(27, 100, 53)
                    hsl(27, 100, 43)
                    hsl(27, 100, 43)
                    hsl(27, 100, 43)
                    hsl(27, 100, 43)
                    hsl(27, 100, 43)
                    hsl(27, 100, 43)
                    hsl(27, 100, 43);</code></pre>

                </code></pre>
      </div>
    </block>
  </article>
</template>

<script>
import Block from '~components/layout/Block'
import ColorSwatch from '~components/ColorSwatch'

export default {
  components: {
    Block,
    ColorSwatch,
  }
}
</script>
