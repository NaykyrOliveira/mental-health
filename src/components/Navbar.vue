<template>
  <header class="hero">
    <nav class="menu">
      <div class="menu-items">
        <router-link to="/" @click="closeMenu">
          <font-awesome-icon :icon="['fas', 'home']" />Bem-vindo
        </router-link>
        <router-link to="/result" @click="closeMenu">
          <font-awesome-icon :icon="['fas', 'chart-bar']" />Meus Resultados
        </router-link>
        <router-link to="/about" @click="closeMenu">
          <font-awesome-icon :icon="['fas', 'info-circle']" />Quem Somos
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style>
@import '/public/assets/css/navbar.css';
</style>