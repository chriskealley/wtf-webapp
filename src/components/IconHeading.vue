<script setup lang="ts">
defineProps<{
  icon: string;
}>();
</script>

<template>
  <div m-4 w-full flex items-center justify-center>
    <div :class="icon"></div>
    <h1 text-2xl>
      <slot></slot>
    </h1>
  </div>
</template>
