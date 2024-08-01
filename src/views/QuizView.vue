<template>
  <div class="quiz-view">
    <h1 class="quiz-title">Quiz sobre Saúde Mental</h1>
    <p class="quiz-description">Responda às perguntas para entender melhor seu estado de saúde mental.</p>

    <div class="progress-container">
      <p class="progress-text">{{ currentQuestionIndex + 1 }} de {{ questions.length }} perguntas respondidas ({{ progressPercentage }}%)</p>
      <div class="progress-bar" :style="{ width: progressPercentage + '%' }"></div>
    </div>

    <div v-if="currentQuestionIndex < questions.length">
      <QuestionCard
        :question="questions[currentQuestionIndex]"
        @onAnswer="handleAnswer"
      />
      <p v-if="showMotivationalMessage" class="motivational-message">{{ motivationalMessage }}</p>
    </div>

    <div v-else>
      <ResultView
        :answers="answers"
        :questions="questions"
        :recommendations="recommendations"
        :action="action"
        :footer="footer"
        :professionals="professionals"
      />
    </div>
  </div>
</template>

<script>
import QuestionCard from '../components/QuestionCard.vue';
import ResultView from './ResultView.vue';
import data from '../db/data.json';

export default {
  components: {
    QuestionCard,
    ResultView
  },
  data() {
    return {
      currentQuestionIndex: 0,
      questions: data.questions,
      answers: [],
      result: '',
      motivationalMessage: '',
      showMotivationalMessage: false,
    };
  },
  computed: {
    progressPercentage() {
      return Math.floor((this.currentQuestionIndex / this.questions.length) * 100);
    }
  },
  methods: {
    handleAnswer(answer) {
      this.answers.push({
        questionId: this.questions[this.currentQuestionIndex].id,
        answer: answer.option,
      });

      const currentQuestion = this.questions[this.currentQuestionIndex];
      const selectedOption = currentQuestion.options.find(
        (opt) => opt.option === answer.option
      );

      if (selectedOption) {
        const randomIndex = Math.floor(
          Math.random() * selectedOption.motivationalMessages.length
        );
        this.motivationalMessage = selectedOption.motivationalMessages[randomIndex];
        this.showMotivationalMessage = true;
      }

      if (this.currentQuestionIndex < this.questions.length - 1) {
        setTimeout(() => {
          this.showMotivationalMessage = false;
          this.currentQuestionIndex++;
        }, 7000);
      } else {
        setTimeout(() => {
          this.$router.push({ name: 'result', query: { answers: JSON.stringify(this.answers), questions: JSON.stringify(this.questions) } });
        }, 10000);
      }
    }
  }
};
</script>

<style>
@import '/public/assets/css/quiz.css';
</style>
