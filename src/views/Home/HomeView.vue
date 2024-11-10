<template>
    <NavComponent class="navBar"/>
    <section class="home">
        <div>
            <img src="../../assets/bitcoin.svg" alt="">
        </div>
        <div class="texto">
            <div>
                <h1>¡Bienvenido a Cryptoexchange!</h1>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe veniam cupiditate voluptatem sunt tempore sed modi esse? Consequuntur fuga voluptates quasi, quam minus dolorem et eligendi eos asperiores nostrum ipsum?
                </p>
            </div>
        </div>
    </section>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue';

export default{
    name: 'HomeView',
    components: {
        NavComponent
    }
}
</script>

<style scoped>
.home{
    display: flex;
    justify-content: center;
    margin-top: 60px;
}
.navBar{
    justify-self: center;
}
.texto{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
}
</style>