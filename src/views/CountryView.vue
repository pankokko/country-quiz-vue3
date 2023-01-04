<template>
  <div>
    <CountryDetail
      v-if="isLoading"
      :country="country"
      :country-quiz="countryQuiz"
    ></CountryDetail>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { Country, countryCapitalQuiz } from "@/types/country/country";
import { useRoute } from "vue-router";
import CountryDetail from "@/components/CountryDetail.vue";
import { fetchCountry, fetchCountries } from "@/composition_function/country";
const route = useRoute();

const country = ref({} as Country);
const isLoading = ref(false);

const countryQuiz = ref({
  quizTitle: "この国の首都はどこでしょうか？",
} as countryCapitalQuiz);

fetchCountry(route.params.name as string).then((data) => {
  country.value = data as Country;
  isLoading.value = true;
});

fetchCountries().then((data) => {
  //首都だけ抽出した配列を保持
  const capitals = data.map((country: Country) => country.capital[0]);

  //国情報を3つ取得、答えとなる国は最後に追加する。
  let questions = [];
  for (let i = 0; i < 3; i++) {
    questions.push(capitals[Math.floor(Math.random() * capitals.length)]);
  }

  //正解を追加
  questions.push(country.value.capital[0]);
  questions.sort(() => Math.random() - 0.5);

  (countryQuiz.value.capitals = questions),
    (countryQuiz.value.collectAnswer = country.value.capital[0]);
});
</script>
