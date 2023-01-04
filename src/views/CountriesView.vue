<template>
  <div class="q-pa-md q-gutter-sm">
    <div v-for="country in data" :key="country.name.common" class="text-h4">
      <q-badge align="top" @click="goDetail(country.name.common)">{{
        country.name.common
      }}</q-badge>
      <img :src="country.flags.png" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { Country } from "../types/country/country";
import { fetchCountries } from "@/composition_function/country";
const router = useRouter();

const data = ref<Array<Country>>([]); //typeScriptの標準的な書き方はこちら

fetchCountries().then((result) => {
  data.value = result;
});

const goDetail = (countryName: string) => {
  router.push({ name: "country", params: { name: countryName } });
};
</script>
