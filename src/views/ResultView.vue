<template>
  <div class="result-view">
    <h1 class="result-title">Seu Resultado</h1>
    
    <div class="result-summary">
      <h2 class="result-subtitle">Resumo</h2>
      <p class="description">{{ summary }}</p>
    </div>
    
    <div class="result-recommendations">
      <h2 class="result-subtitle">Recomendações</h2>
      <ul>
        <li v-for="(recommendation, index) in recommendations" :key="index" class="recommendation-item">
          {{ recommendation }}
        </li>
      </ul>
    </div>
    
    <div class="result-action">
      <h2 class="result-subtitle">Próximos Passos</h2>
      <p class="description">{{ action }}</p>
    </div>
    
    <div class="result-professionals">
      <h2 class="result-subtitle">Profissionais Recomendados</h2>
      <div class="card-container">
        <div class="professional-card" v-for="(professional, index) in professionals" :key="index">
          <h3 class="card-title">{{ professional.name }}</h3>
          <p class="card-specialization">{{ professional.specialization }}</p>
          <p class="card-contact">
            Contato: 
            <a :href="'https://wa.me/' + professional.contact" target="_blank">
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>

    <div class="result-footer">
      <p class="description">{{ footer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultView',
  data() {
    return {
      summary: '',
      answers: [],
      questions: []
    };
  },
  created() {
    try {
      const answersStr = localStorage.getItem('quizAnswers') || '[]';
      const questionsStr = localStorage.getItem('quizQuestions') || '[]';
      this.answers = JSON.parse(answersStr);
      this.questions = JSON.parse(questionsStr);
      console.log('Answers:', this.answers);
      console.log('Questions:', this.questions);
      
      localStorage.removeItem('quizAnswers');
      localStorage.removeItem('quizQuestions');
    } catch (e) {
      console.error('Error parsing JSON from localStorage:', e);
      this.answers = [];
      this.questions = [];
    }
    this.summary = this.generateSummary();
  },
  methods: {
    generateSummary() {
      const resultCategory = this.calculateResults();
      let summary = "";

      switch (resultCategory) {
        case "ansiedade":
          summary = "Seu resultado sugere que você pode estar enfrentando ansiedade. Recomendamos procurar ajuda profissional.";
          break;
        case "depressão":
          summary = "Seu resultado sugere que você pode estar enfrentando depressão. Recomendamos procurar ajuda profissional.";
          break;
        case "autismo":
          summary = "Seu resultado sugere que você pode estar no espectro autista. Recomendamos procurar ajuda profissional.";
          break;
        case "misto":
          summary = "Seu resultado sugere uma combinação de sintomas. Recomendamos procurar ajuda profissional para uma avaliação mais detalhada.";
          break;
        default:
          summary = "Não foi possível determinar uma categoria predominante. Recomendamos procurar ajuda profissional para uma avaliação mais detalhada.";
      }

      return summary;
    },
    calculateResults() {
      const categories = {
        ansiedade: 0,
        depressão: 0,
        autismo: 0
      };

      if (!Array.isArray(this.answers) || !Array.isArray(this.questions)) {
        console.error('Invalid or missing answers/questions data');
        return '';
      }

      this.answers.forEach(answer => {
        const question = this.questions.find(q => q.id === answer.questionId);
        if (question && categories.hasOwnProperty(question.category)) {
          if (answer.answer === 'sim') {
            categories[question.category]++;
          }
        }
      });

      console.log('Category counts:', categories);

      const maxCount = Math.max(...Object.values(categories));
      const maxCategories = Object.keys(categories).filter(key => categories[key] === maxCount);

      if (maxCategories.length > 1) {
        return 'misto';
      } else {
        return maxCategories[0] || '';
      }
    }
  },
  props: {
    recommendations: {
      type: Array,
      default: () => [
        'Pratique técnicas de relaxamento.',
        'Considere procurar um profissional.',
        'Mantenha um estilo de vida saudável.'
      ]
    },
    action: {
      type: String,
      default: 'Lembre-se, buscar ajuda é um sinal de força.'
    },
    footer: {
      type: String,
      default: 'Obrigado por usar nosso quiz. Cuide-se!'
    },
    professionals: {
      type: Array,
      default: () => [
        {
          name: 'Dr. Gilzete Morais',
          specialization: 'Psicóloga',
          contact: '5561981994850' 
        },
        {
          name: 'Clínica Neoviv',
          specialization: 'Psiquiatra',
          contact: '5561985826462' 
        }
      ]
    }
  }
};
</script>

<style>
@import '/public/assets/css/result.css';
</style>
