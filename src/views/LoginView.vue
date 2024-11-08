<template>
    <section id="login-box" class="d-flex align-items-center justify-content-center">
        <div class="login">
            <div>
                <InputComponent @validityChanged="setUserValidity" />
            </div>
            <div :style="{ color: '#dc3545', height: '20px' }">
                <small v-if="isUserValid === false">El usuario debe ser alfanumérico y contener al menos 5 caracteres.</small>
            </div>
            <div v-if="isUserValid">
                <ButtonComponent @click="handleLogin" btn-class="btn btn-custom btn-lg" text="Ingresar"/>
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
    width: 40vw;
    height: 60vh;
    gap: 1em;
    border-radius: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    animation: fadeInUp 2s ease-out;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px); /* Empieza desde abajo */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Llega a su posición final */
  }
}

#login-box{
    min-width: 100vw;
    min-height: 90vh;
    background-image: url(../assets/undraw_login_re_4vu2.svg), url(../assets/undraw_floating_re_xtcj.svg) ;
    background-repeat: no-repeat;
    background-position: bottom right, top left;
    background-size: auto, 30% 40%;
    animation: fadeInUp 1s ease-out;
}

.btn-custom{
    background-color: #6c63ff;
    color: white;
}

.btn-custom:hover {
  background-color: #5753e3;
  color: white;
}
</style>