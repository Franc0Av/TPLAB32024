<template>
    <div class="movementsView">
        <TransactionTableComponent @success="handleTransactions" :transactions="transactions" :showList="showList" />
        <h2 v-if="!showList">No hay datos para mostrar</h2>
    </div>
</template>

<script>
import TransactionTableComponent from '@/components/TransactionTableComponent.vue';
import { getTransactions } from '@/Services/transactions';
import { useAuthStore } from '@/stores/auth.js';
import { storeToRefs } from 'pinia';
import { ref, onMounted } from 'vue';

export default{
    components:{
        TransactionTableComponent
    },
    setup() {
        const authStore = useAuthStore();
        const { user } = storeToRefs(authStore);
        const transactions = ref([]);
        const showList = ref(false);

        const loadTransactionsData = async () => {
            var response = await getTransactions(user.value);

            if(response != null && response.data){
                transactions.value = response.data;
                showList.value = true;
            }
        }

        const handleTransactions = (value) => {
            if(value){
                loadTransactionsData();
            }
        }

        onMounted(() => {
            loadTransactionsData();
        });

        return {
            transactions,
            handleTransactions,
            showList
        };
    }
}
</script>

<style>
.movementsView{
    animation: fadeInUp 1s ease-out;
}
</style>