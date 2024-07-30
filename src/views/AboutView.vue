<template>
  <div class="about">
    <h1 class="about-title">{{ title }}</h1>

    <div class="section">
      <h2 class="section-title">Objetivo</h2>
      <p class="description">{{ purpose }}</p>
    </div>

    <div class="section">
      <h2 class="section-title">Como Funciona</h2>
      <p class="description">{{ howItWorks }}</p>
    </div>

    <div class="section">
      <h2 class="section-title">Missão</h2>
      <p class="description">{{ mission }}</p>
    </div>

    <div class="section">
      <h2 class="section-title">Por Que Este Quiz?</h2>
      <p class="description">{{ whyThisQuiz }}</p>
    </div>

    <div class="section">
      <h2 class="section-title">Contribua</h2>
      <p class="description">{{ contribute }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Sobre o Quiz de Saúde Mental',
      purpose: 'Nosso quiz interativo foi criado com a intenção de oferecer um recurso acessível e acolhedor para você refletir sobre seu estado emocional e mental. Queremos proporcionar uma experiência que vá além da simples autoavaliação, fornecendo suporte e encorajamento em cada etapa do processo.',
      howItWorks: 'O Quiz de Saúde Mental é uma ferramenta projetada para ajudá-lo a identificar áreas de preocupação e promover o autoconhecimento. Com uma série de perguntas sobre condições como ansiedade, depressão, autismo e estresse, o quiz visa oferecer uma visão geral do seu bem-estar mental e emocional. Após cada resposta, você verá uma mensagem motivacional personalizada, que aparece temporariamente dentro do mesmo card da pergunta. Essas mensagens são projetadas para encorajar e apoiar você durante o quiz. Ao final do quiz, você receberá uma recomendação baseada nas suas respostas. Embora o quiz não substitua uma avaliação profissional, ele pode ajudar a identificar áreas onde você pode querer buscar mais informações ou apoio.',
      mission: 'Nosso objetivo é criar um espaço onde você possa explorar e refletir sobre sua saúde mental de maneira segura e positiva. Queremos ajudar você a se sentir mais informado e capacitado para cuidar do seu bem-estar emocional.',
      whyThisQuiz: 'Inspirado pela necessidade de promover a conscientização sobre saúde mental e fornecer um recurso útil para o público, o quiz foi desenvolvido para ser uma ferramenta amigável e acessível. Acreditamos que entender suas próprias emoções e desafios é um passo importante para o autocuidado e a busca de apoio profissional, se necessário.',
      contribute: 'Se você tiver sugestões ou feedback sobre o quiz, ou se deseja colaborar de alguma forma, entre em contato conosco. Estamos sempre abertos a ideias e melhorias para tornar essa ferramenta ainda mais útil e acessível.',
    };
  }
};
</script>

<style>
@import '/public/assets/css/about.css';
</style>
