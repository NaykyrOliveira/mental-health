<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="contact-info">
                <h3 class="contact">Contato:</h3>
                <div class="contact-link">
                    <div class="info-item">
                        <img :src="github" :alt="githubIcon" class="contact-img">
                        <p class="social-media">GitHub</p>
                      </div>
                      <div class="info-item">
                        <img :src="linkedin" :alt="linkedinIcon" class="contact-img">
                        <p class="social-media">LinkedIn</p>
                      </div>
                </div>
            </div>
            <span class="footer__copy">
                &#169;  2024. Todos os direitos reservados
            </span>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            github: '../assets/img/icons/github.png',
            linkedin: '../assets/img/icons/linkedin.png',
            githubIcon: 'Ícone GitHub',
            linkedinIcon: 'Ícone LinkedIn'
        };
    }
};
</script>

<style>
@import '/public/assets/css/contact.css';
</style>