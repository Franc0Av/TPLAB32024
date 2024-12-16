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
        </div>
    </section>
</template>

<script>
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { useAuthStore } from '@/stores/auth.js';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

export default{
    name: 'LoginView',
    components: {
        InputComponent,
        ButtonComponent
    },
    setup() {
        const authStore = useAuthStore();
        const router = useRouter();
        const { isUserLogged } = storeToRefs(authStore);

        const isUserValid = ref(null);

        const setUserValidity = (isValid) => {
            isUserValid.value = isValid;
        };

        const handleLogin = () => {
            if (isUserValid.value) {
                setTimeout(() => {
                    authStore.isUserLogged = true;
                    router.push({ name: 'Home' });
                }, 1500);
            }
        };
        return {
            isUserValid,
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