<template>
        <section class="form-box">
            <form @submit.prevent="submitForm" class="input-box">
                <h2>{{ actionTitle }}</h2>
                <div class="d-flex flex-column justify-content-around align-items-center gap-5">
                  <div class="d-flex align-items-center fs-3 gap-3">
                    <i class="bi bi-card-checklist"></i>
                    <select class="form-select form-select-md" v-model="selectedCrypto" id="cryptocurrency">
                      <option value="" disabled>Selecciona una opción</option>
                      <option v-for="crypto in cryptocurrencies" :key="crypto.id" :value="crypto.name">
                      {{ crypto.name }}
                      </option>
                    </select>
                  </div>
                  <div class="d-flex align-items-center fs-3">
                    <i class="bi bi-coin text-warning"></i>
                    <InputTransactionComponent @inputChanged="handleAmount" placeholder="Monto a comprar" />
                  </div>
                  <div class="d-flex align-items-center fs-3">
                    <i class="bi bi-cash-coin text-success"></i>
                    <InputTransactionComponent v-model="price" type="pay" placeholder="Monto a pagar" readonly />
                  </div>
                </div>
                <ButtonComponent text="Comprar" id="btn-custom" class="btn btn-lg" :disabled="price == null"/>
                <button @click="getUserTransactions">Get</button>
            </form>
        </section>
</template>

<script>
import InputTransactionComponent from '@/components/InputTransactionComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { useAuthStore } from '@/stores/auth.js';
import { storeToRefs } from 'pinia';
import { calculateAmount } from '@/views/Transactions/TransactionsView';
import { addTransaction, getTransactions } from '@/Services/transactions';
import dayjs from 'dayjs';

export default {
    components:  {
        InputTransactionComponent,
        ButtonComponent
    },
    props: {
        actionTitle: String,
        transactionType: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            selectedCrypto: "",
            amount: null,
            purchase: false,
            sale: false,
            price: null,
            cryptocurrencies: [
                { id: 1, name: "BTC" },
                { id: 2, name: "ETH" },
                { id: 3, name: "USDT" },
                { id: 4, name: "DAI" }
            ]
        };
    },
    watch: {
        amount: "updatePrice",
        selectedCrypto: "updatePrice",
    },
    setup(){
        const store = useAuthStore();
        const { user } = storeToRefs(store);

        return { user };
    },
    methods: {
        handleAmount(value) {
            this.amount = value;
        },
        async updatePrice() {
            if (this.amount && this.selectedCrypto) {
                try {
                    this.price = await calculateAmount(this.amount, this.selectedCrypto);
                } catch (error) {
                    console.error("Error al calcular el monto:", error);
                    this.price = null;
                }
            } else {
                this.price = null;
            }
        },
        async submitForm() {

            const formattedDate = dayjs().format('DD-MM-YYYY HH:mm');

            const transactionBody = {
                user_id: this.user,
                action: this.transactionType.toLowerCase() == "compra" ? "purchase" : "sale",
                crypto_code: this.selectedCrypto.toLowerCase(),
                crypto_amount: this.amount,
                money: this.price,
                datetime: formattedDate
            };

            try {
                const response = await addTransaction(transactionBody);
                console.log('Accion elegida: ', this.transactionType)
                console.log('Transacción exitosa:', response);
            } catch (error) {
                console.error('Error al realizar la transacción:', error);
            }
        },
        async getUserTransactions() {
            const data = await getTransactions(this.user);
            console.log(data);
        }
    }
}
</script>

<style>
.transactions-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 3em;
}
.form-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>