<!-- <script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->
<script setup lang="ts">
import { reactive, computed } from "vue";

const state = reactive({
  count: 0,
  number: 10,
});

const increment = () => {
  state.count++;
  state.number++;
};
</script>

<template>
  <p>{{ state.count }}</p>
  <p>{{ state.number }}</p>

  <button @click="increment">+</button>
</template>
