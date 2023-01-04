<template>
  <div class="q-pa-md">
    <q-form class="q-gutter-md" @submit="submitAnswer">
      <h5>{{ countryQuiz.quizTitle }}</h5>
      <q-radio
        v-for="capital in countryQuiz.capitals"
        :key="capital"
        v-model="selectedAnswer"
        :val="capital"
        :label="capital"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
    <q-card v-if="isCorrectAnswer" flat bordered class="q-mt-md bg-grey-2">
      <div
        class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
      >
        Your answer is correct: {{ countryQuiz.collectAnswer }}
      </div>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { countryCapitalQuiz } from "@/types/country/country";

const props = defineProps<{
  countryQuiz: countryCapitalQuiz;
}>();

const selectedAnswer = ref("countryName");
let isCorrectAnswer = ref(false);

const submitAnswer = () => {
  if (selectedAnswer.value === props.countryQuiz.collectAnswer) {
    isCorrectAnswer.value = true;
  }
};
</script>
