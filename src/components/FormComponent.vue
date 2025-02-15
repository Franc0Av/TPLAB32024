<template>
        <section class="form-box">
            <form @submit.prevent="submitForm" class="input-box">
                <h2>{{ actionTitle }}</h2>
                <div class="d-flex flex-column justify-content-around align-items-center gap-5">
                  <div class="d-flex align-items-center fs-3 gap-3">
                    <i class="bi bi-card-checklist"></i>
                    <select class="form-select form-select-md" v-model="selectedCrypto" @change="handleTotals" id="cryptocurrency">
                      <option value="" disabled>Selecciona una opción</option>
                      <option v-for="crypto in cryptocurrencies" :key="crypto.id" :value="crypto.name">
                      {{ crypto.name }}
                      </option>
                    </select>
                  </div>
                  <div v-if="transactionType == 'Venta'" class="d-flex align-items-center fs-3">
                    <i class="bi bi-coin text-warning"></i>
                    <InputTransactionComponent v-model="availableCoin" placeholder='Monto disponible' readonly />
                  </div>
                  <div class="d-flex align-items-center fs-3">
                    <i class="bi bi-coin text-warning"></i>
                    <InputTransactionComponent v-model="amount" :availableAmount="availableCoin" :placeholder="transactionType == 'Compra' ? 'Monto a comprar' : 'Monto a vender'" />
                  </div>
                  <div class="d-flex align-items-center fs-3">
                    <i class="bi bi-cash-coin text-success"></i>
                    <InputTransactionComponent v-model="price" :placeholder="transactionType == 'Compra' ? 'Monto a pagar' : 'Monto a recibir'" readonly />
                  </div>
                </div>
                <ButtonComponent 
                    @click="submitForm" 
                    :text="transactionType == 'Compra' ? 'Comprar' : 'Vender'" 
                    id="btn-custom" 
                    class="btn btn-lg" 
                    data-bs-toggle="modal" 
                    data-bs-target="#staticBackdrop" 
                    :disabled="price === null"
                />
            </form>
            <ModalComponent @successfull="handleSuccess" :transactionBody="transactionBody" :cryptoSelected="selectedCrypto" modalTitle="Confirmar transacción" btnText="Confirmar"/>
        </section>
</template>

<script>
import InputTransactionComponent from '@/components/InputTransactionComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import ModalComponent from './ModalComponent.vue';
import { useAuthStore } from '@/stores/auth.js';
import { storeToRefs } from 'pinia';
import { calculateAmount, formatCryptoCoin, calculateTotals } from '@/views/Transactions/TransactionsView';
import { getTransactions } from '@/Services/transactions';

export default {
    components:  {
        InputTransactionComponent,
        ButtonComponent,
        ModalComponent
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
            availableCoin: null,
            purchase: false,
            sale: false,
            price: null,
            success: false,
            cryptocurrencies: [
                { id: 1, name: "Bitcoin" },
                { id: 2, name: "Ethereum" },
                { id: 3, name: "USDT" },
                { id: 4, name: "DAI" }
            ],
            transactionBody: {
                user_id: '',
                action: '',
                crypto_code: '',
                crypto_amount: 0,
                money: 0,
                datetime: ''
            }
        };
    },
    watch: {
        amount: "updatePrice",
        selectedCrypto: "updatePrice",
        availableCoin: "handleTotals"
    },
    setup(){
        const store = useAuthStore();
        const { user } = storeToRefs(store);

        return { user };
    },
    methods: {
        async updatePrice() {

            let cryptoCoin = await formatCryptoCoin(this.selectedCrypto);

            if(this.transactionType.toLowerCase() === 'compra')
            {
                if (this.amount && this.selectedCrypto) {
                    try 
                    {
                        this.price = await calculateAmount(this.amount, cryptoCoin, this.transactionType);
                    } catch (error) 
                    {
                        console.error("Error al calcular el monto:", error);
                        this.price = null;
                    }
                } else {
                    this.price = null;
                }
            }
            else if(this.transactionType.toLowerCase() === 'venta'){

                if(this.selectedCrypto && this.amount != null && this.amount <= this.availableCoin){
                    
                    try{
                        this.price = await calculateAmount(this.amount, cryptoCoin, this.transactionType);
                    } catch (error)
                    {
                        console.error("Error al calcular el monto:", error);
                        this.price = null;
                    }
                }
                else {
                    this.price = null;
                }
            }
        },
        async submitForm() {

            this.transactionBody = {
                user_id: this.user,
                action: this.transactionType.toLowerCase() == "compra" ? "purchase" : "sale",
                crypto_code: await formatCryptoCoin(this.selectedCrypto),
                crypto_amount: this.amount,
                money: this.price,
                datetime: new Date().toISOString()
            };
            console.log('Cuerpo de transaccion:', this.transactionBody)
        },
        async getUserTransactions() {
            const data = await getTransactions(this.user);
            console.log(data);
        },
        async handleTotals(){

            if(this.selectedCrypto && this.transactionType == 'Venta')
            {
                try{

                    let crypto = await formatCryptoCoin(this.selectedCrypto);
                    const data = await calculateTotals(this.user, crypto);
    
                    this.availableCoin = data;
                    console.log('available coin:', this.availableCoin)

                }catch (error){
                    console.error("Error al obtener el monto disponible:", error);
                    this.availableCoin = null;
                }

                // if(this.transactionType == 'Venta')
                // {
                //     this.availableCoin = 25;
                // }
                // else{
                //     this.availableCoin = null;
                // }
                
            }
            else{
                this.availableCoin = null;
            }
        },
        async handleSuccess(value){
            if(value){
                this.selectedCrypto = "",
                this.amount = "",
                this.availableCoin = "",
                this.price = ""
            }
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
    animation: fadeInUp 1s ease-out;
}
</style>