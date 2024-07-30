<template>
  <div class="home">
    <QuizView />
  </div>
</template>

<script>
import QuizView from './QuizView.vue';

export default {
  name: 'HomeView',
  components: {
    QuizView
  }
}
</script>

<style>
.home {
  padding: 20px;
}
</style>
