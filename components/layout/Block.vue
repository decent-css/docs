<template>
  <div class="flex items-stretch">
    <div class="col-7 px-5">
      <div class="py-1">
        <slot name="main"></slot>
      </div>
    </div>
    <div class="tn-1 col-5 py-2 px-4 cbgg-8 bl-7">
      <slot name="code" class="bt-7"></slot>
    </div>
  </div>
</template>
