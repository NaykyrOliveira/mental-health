<template>
  <div class="quiz-view">
    <h1 class="quiz-title">Quiz sobre Saúde Mental</h1>
    <p class="quiz-description">Responda às perguntas para entender melhor seu estado de saúde mental.</p>

    <div v-if="currentQuestionIndex < questions.length">
      <QuestionCard
        :question="questions[currentQuestionIndex]"
        @onAnswer="handleAnswer"
      />
      <p v-if="showMotivationalMessage" class="motivational-message">{{ motivationalMessage }}</p>
    </div>

    <div v-else>
      <div>
        <h2>Resultado do Quiz</h2>
        <p>{{ result }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionCard from '../components/QuestionCard.vue';
import data from '../db/data.json';

export default {
  components: {
    QuestionCard,
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
          this.generateResults();
        }, 10000); 
      }
    },
    generateResults() {
      let recommendation = "Continue cuidando da sua saúde mental!";
      
      const categories = {
        ansiedade: 0,
        depressão: 0,
        autismo: 0
      };

      this.answers.forEach((answer) => {
        const question = this.questions.find(
          (q) => q.id === answer.questionId
        );
        if (question && categories.hasOwnProperty(question.category)) {
          categories[question.category]++;
        }
      });

      const maxCategory = Object.keys(categories).reduce((a, b) =>
        categories[a] > categories[b] ? a : b
      );
      
      if (data.recommendations && data.recommendations.hasOwnProperty(maxCategory)) {
        recommendation = data.recommendations[maxCategory];
      }

      this.result = recommendation;
    }
  },
};
</script>

<style>
@import '/public/assets/css/quiz.css';
</style>
