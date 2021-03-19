<template>
  <button :class="{primary}">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class UiButton extends Vue {
    @Prop()
    private primary: boolean = false;
}
</script>
<style lang="postcss">
button.ui, .ui.button {
  @apply bg-gray-500 px-2 py-4 rounded font-semibold;

  &.primary {
    @apply bg-blue-500;
  }
}
</style>
