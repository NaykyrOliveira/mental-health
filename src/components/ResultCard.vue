<template>
  <ResultView
    :summary="'Você pode estar enfrentando níveis elevados de estresse.'"
    :recommendations="['Considere técnicas de relaxamento.', 'Procure apoio de um profissional.', 'Mantenha um estilo de vida saudável.']"
    :action="'Lembre-se, buscar ajuda é um sinal de força.'"
    :footer="'Cuide-se e fique bem!'"
  />
</template>

<script>
import ResultView from '@/views/ResultView.vue';

export default {
  components: {
    ResultView
  }
};
</script>
