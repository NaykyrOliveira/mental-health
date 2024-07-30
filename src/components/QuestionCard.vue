<template>
  <div class="question-card">
    <p>{{ question.question }}</p>
    <div class="options">
      <button
        v-for="option in question.options"
        :key="option.option"
        @click="selectOption(option)"
      >
        {{ option.option }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('onAnswer', option);
    }
  }
};
</script>

<style scoped>
@import '/public/assets/css/question.css';
</style>
