<template>
    <section id="login-box" class="d-flex align-items-center justify-content-center">
        <div class="login">
            <div>
                <div class="avatar-login">
                    <div>
                        <img id="imgAvatar" src="../../assets/avatar.svg" alt="avatar">
                    </div>
                    <div>
                        <img id="imgAvatar" src="../../assets/femaleavatar.svg" alt="avatar">
                    </div>
                </div>
            </div>
            <div>
                <InputComponent @validityChanged="setUserValidity" />
            </div>
            <div :style="{ color: '#dc3545', height: '20px' }">
                <small v-if="isUserValid === false">El usuario debe ser alfanumérico y contener al menos 5 caracteres.</small>
            </div>
            <div v-if="isUserValid">
                <ButtonComponent @click="handleLogin" id="btn-custom" btn-class="btn btn-lg" text="Ingresar"/>
            </div>
            <div v-else>
                <ButtonComponent btn-class="btn btn-secondary btn-lg" text="Ingresar" disabled/>
            </div>
            <div v-if="isLoading" class="spinner-login">
                <SpinnerComponent />
            </div>
        </div>
    </section>
</template>

<script>
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';

export default{
    name: 'LoginView',
    components: {
        InputComponent,
        ButtonComponent,
        SpinnerComponent
    },
    data() {
        return {
        isUserValid: null,
        isLoading: false
        };
    },
    methods: {
        setUserValidity(isValid) {
            this.isUserValid = isValid;
        },
        handleLogin() {
            if(this.isUserValid){
                this.isLoading = true;
                setTimeout(() => {
                    this.isLoading = false;
                    this.$router.push({ name: 'Home' });
                }, 1500);
            }
        }
    }
}
</script>

<style scoped>
@import './LoginView.css';
</style>