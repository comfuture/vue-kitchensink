<template>
  <button>{{ label }}</button>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "../base.css";

@Component
export default class UiButton extends Vue {
    @Prop()
    private foo: string = "";
}
</script>
<style>
button.ui {
  @apply bg-gray-500;
}
</style>
