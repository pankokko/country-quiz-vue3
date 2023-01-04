<template>
  <div>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card dark bordered class="my-card">
        <img :src="country.flags.png" />
        <q-card-section>
          <div class="text-h6">country name: {{ country.name.common }}</div>
          <!-- <div class="text-subtitle2">
            capital city: {{ country.capital[0] }}
          </div> -->
        </q-card-section>

        <q-card-section class="q-pt-none">
          population: {{ population }}</q-card-section
        >
      </q-card>
    </div>
    <CountryQuiz :country-quiz="countryQuiz"></CountryQuiz>
  </div>
</template>
<script setup lang="ts">
import CountryQuiz from "@/components/CountryQuiz.vue";
import type { Country, countryCapitalQuiz } from "@/types/country/country";
import { computed } from "vue";

const props = defineProps<{
  country: Country;
  countryQuiz: countryCapitalQuiz;
}>();

const population = computed(() => {
  return props.country.population.toLocaleString();
});
</script>
