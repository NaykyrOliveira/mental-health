<template>
  <header class="hero">
    <nav class="menu">
      <div class="menu-items">
        <router-link to="/">
          <i class="bi bi-house-door"></i>
          <span>Bem-vindo</span>
        </router-link>
        <router-link to="/result">
          <i class="bi bi-bar-chart"></i>
          <span>Meus Resultados</span>
        </router-link>
        <router-link to="/about">
          <i class="bi bi-info-circle"></i>
          <span>Quem Somos</span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style>
@import '/public/assets/css/navbar.css';
</style>