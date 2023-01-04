<script setup lang="ts">
let count = 0;

setInterval(() => {
  count += 1;
}, 1000);
</script>

<template>
  <div>
    {{ count }}
  </div>
</template>
