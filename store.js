import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      answers: [],
      questions: []
    };
  },
  mutations: {
    setAnswers(state, answers) {
      state.answers = answers;
    },
    setQuestions(state, questions) {
      state.questions = questions;
    }
  },
  actions: {
    updateAnswers({ commit }, answers) {
      commit('setAnswers', answers);
    },
    updateQuestions({ commit }, questions) {
      commit('setQuestions', questions);
    }
  }
});
