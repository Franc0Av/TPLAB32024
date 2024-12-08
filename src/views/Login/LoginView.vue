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
import { useAuthStore } from '@/stores/auth.js';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

export default{
    name: 'LoginView',
    components: {
        InputComponent,
        ButtonComponent,
        SpinnerComponent
    },
    setup() {
        const authStore = useAuthStore();
        const router = useRouter();
        const { isUserLogged } = storeToRefs(authStore);

        const isUserValid = ref(null);
        const isLoading = ref(false);

        const setUserValidity = (isValid) => {
            isUserValid.value = isValid;
        };

        const handleLogin = () => {
            if (isUserValid.value) {
                isLoading.value = true;
                setTimeout(() => {
                    isLoading.value = false;
                    authStore.isUserLogged = true;
                    console.log(authStore.isUserLogged)
                    router.push({ name: 'Home' });
                }, 1500);
            }
        };
        return {
            isUserValid,
            isLoading,
            isUserLogged,
            setUserValidity,
            handleLogin
        };
    }
}
</script>

<style scoped>
@import './LoginView.css';
</style>