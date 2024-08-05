<template>
    <div class="hero">
        <nav class="menu">
        <div class="menu-toggle" @click="toggleMenu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <div :class="['menu-items', { 'show-menu': isMenuOpen }]">
            <router-link to="/" @click.native="closeMenu">Bem-vindo</router-link>
            <router-link to="/result" @click.native="closeMenu">Meus Resultados</router-link>
            <router-link to="/about" @click.native="closeMenu">Quem Somos</router-link>
        </div>
        </nav>
    </div>
</template>
  

<script>
export default {
    name: "Navbar",
    data() {
        return {
        isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
        this.isMenuOpen = false;
        }
    }
}
</script>
  
<style>
@import '/public/assets/css/navbar.css';
</style>