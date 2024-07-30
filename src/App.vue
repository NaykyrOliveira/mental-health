<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Contact />
  </div>
</template>

<script>
import Contact from './components/Contact.vue';
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Contact
  }
};
</script>

<style>
@import '/public/assets/css/style.css';
</style>
