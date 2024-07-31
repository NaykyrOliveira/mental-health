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
  props: {
    summary: {
      type: String,
      default: 'Você obteve um resultado de ansiedade.'
    },
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
