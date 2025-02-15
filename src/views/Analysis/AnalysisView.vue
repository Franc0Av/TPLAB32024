<template>
    <h1 id="walletTitle">Mi cartera</h1>
    <div class="walletContainer">
        <SpinnerComponent v-if="!showCards" />
        <div class="cardsContainer">
            <CardComponent  v-for="(data, coin) in bodyData" :key="coin" :CoinName="coin" :CoinBody="data" />
        </div>
    </div>
</template>

<script>
import { calculateTotalsByCoin } from '@/Services/transactions';
import CardComponent from '@/components/CardComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';
import { useAuthStore } from '@/stores/auth.js';
import { storeToRefs } from 'pinia';
import { ref, onMounted } from 'vue';

export default {
    components: {
        CardComponent,
        SpinnerComponent
    },
    setup(){

        const authStore = useAuthStore();
        const { user } = storeToRefs(authStore);
        const bodyData = ref(null);
        const showCards = ref(false);

        const getTotals = async () => {
            bodyData.value = await calculateTotalsByCoin(user.value);

            if(bodyData.value){
                showCards.value = true;
            }
        }

        onMounted(() => {
            getTotals();
        });

        return{
            bodyData,
            getTotals,
            showCards
        }
    }
}
</script>

<style>
.walletContainer{
    height: 100vh;
}
.cardsContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3em;
    margin-top: 2em;
    padding: 2em;
    animation: fadeInUp 1s ease-out;
}
#walletTitle{
    animation: fadeInUp 1s ease-out;
    margin-top: 2em;
}
</style>