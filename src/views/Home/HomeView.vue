<template>
    <NavComponent class="navBar"/>
    <section class="home">
        <div>
            <img src="../../assets/bitcoin.svg" alt="">
        </div>
        <div class="texto">
            <div>
                <h1>¡Bienvenido a XchangeX!</h1>
            </div>
            <div>
                <p>
                    En XchangeX, te ofrecemos una plataforma segura, rápida e intuitiva para intercambiar tus criptomonedas favoritas. Nuestra misión es brindarte una experiencia de usuario excepcional mientras navegas en el emocionante mundo de las criptomonedas.
                </p>
            </div>
        </div>
    </section>
</template>

<script>

export default{
    name: 'HomeView'
}

</script>

<style scoped>
.home{
    display: flex;
    justify-content: center;
    margin-top: 60px;
}

.texto{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
}
</style>