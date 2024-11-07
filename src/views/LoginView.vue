<template>
    <section id="login-box" class="d-flex align-items-center justify-content-center">
        <div class="login">
            <div>
                <InputComponent @validityChanged="setUserValidity" />
            </div>
            <div style="color: #dc3545;" v-if="isUserValid === false">
                <p>El usuario debe ser alfanumérico.</p>
            </div>
            <div v-if="isUserValid">
                <ButtonComponent @click="handleLogin" btn-class="btn btn-primary btn-lg" text="Ingresar"/>
            </div>
            <div v-else>
                <ButtonComponent btn-class="btn btn-secondary btn-lg" text="Ingresar" disabled/>
            </div>
        </div>
    </section>
</template>

<script>
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

export default{
    name: 'LoginView',
    components: {
        InputComponent,
        ButtonComponent
    },
    data() {
        return {
        isUserValid: null
        };
    },
    methods: {
        setUserValidity(isValid) {
            this.isUserValid = isValid;
        },
        handleLogin() {
            if(this.isUserValid)
            this.$router.push({ name: 'Home' });
        }
    }
}
</script>

<style scoped>
.login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 100vh;
    gap: 2em;
    background-image: url('../assets/undraw_secure_login_pdn4.svg');
    background-size: 60% 70%;
    background-repeat: no-repeat;
    background-position: 33% 67%;
}
#login-box{
    min-width: 100vw;
    min-height: 100vh;
}
</style>