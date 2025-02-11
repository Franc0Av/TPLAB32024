<template>
    <section class="home">
        <div>
            <img src="../../assets/bitcoin.svg" alt="">
        </div>
        <div class="texto">
            <div>
                <h1>¡Bienvenido a XchangeX!</h1>
            </div>
            <div>
                <p class="fs-4">
                    En XchangeX, te ofrecemos una plataforma segura, rápida e intuitiva para intercambiar tus criptomonedas favoritas. Nuestra misión es brindarte una experiencia de usuario excepcional mientras navegas en el emocionante mundo de las criptomonedas.
                </p>
            </div>
            <div @click="tradingMod" class="transactionRedirect fs-1">
                Modo Trading
            </div>
        </div>
    </section>
</template>

<script>
import { useRouter } from 'vue-router';

export default{
    name: 'HomeView',
    setup(){
        const router = useRouter();

        const tradingMod = () =>{
            router.push({ name: 'Transactions' });
        };

        return {tradingMod};
    }
}

</script>

<style scoped>
.home{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    margin-top: 5em;
    animation: fadeInUp 1s ease-out;
}

.texto{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    gap: 1.5em;
}
.transactionRedirect{
    background-image: url('../../assets/purplebackground.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    height: 20vh;
    width: 20vw;
    border-radius: 15px;
    align-content: center;
    cursor: pointer;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 40px;
    font-weight: bold;
}
h1{
    font-size: 60px;
    font-family: Arial, Helvetica, sans-serif;
}
</style>