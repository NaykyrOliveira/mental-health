<template>
    <div class="hero">
        <nav class="menu">
            <div class="menu-toggle" @click="toggleMenu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <div :class="['menu-items', { 'show-menu': isMenuOpen }]">
                <router-link to="/" @click.prevent="closeMenu">
                    <font-awesome-icon :icon="['fas', 'home']" /> Bem-vindo
                </router-link>
                <router-link to="/result" @click.prevent="closeMenu">
                    <font-awesome-icon :icon="['fas', 'chart-bar']" /> Meus Resultados
                </router-link>
                <router-link to="/about" @click.prevent="closeMenu">
                    <font-awesome-icon :icon="['fas', 'info-circle']" /> Quem Somos
                </router-link>
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
