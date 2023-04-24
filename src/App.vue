<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterStore } from "./stores/main";

const store = useCounterStore();
const { name, doubleCount } = storeToRefs(store);
const { increment } = store;
</script>

<template>
  <p>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <router-view />
  {{ name }}
  {{ doubleCount }}
  <button @click="increment">+</button>
</template>
