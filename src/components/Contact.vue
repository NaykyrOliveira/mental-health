<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="contact-info">
                <h3 class="contact">Contato:</h3>
                <div class="contact-link">
                    <div class="info-item">
                        <a :href="githubUrl" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-github"></i>
                            <p class="social-media">GitHub</p>
                        </a>
                    </div>
                    <div class="info-item">
                        <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-linkedin"></i>
                            <p class="social-media">LinkedIn</p>
                        </a>
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
            githubUrl: 'https://github.com/NaykyrOliveira/mental-health', 
            linkedinUrl: 'https://www.linkedin.com/in/naykyr-oliveira/' 
        };
    }
};
</script>

<style>
@import '/public/assets/css/contact.css';
</style>
