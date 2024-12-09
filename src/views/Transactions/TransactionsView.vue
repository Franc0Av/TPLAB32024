<template>
    <div class="transactions-box">
        <section class="sale-box">
            <form @submit.prevent="submitForm" class="input-box">
                <h2>Nueva Compra</h2>
                <div class="d-flex flex-column justify-content-around align-items-center gap-5">
                  <div class="d-flex align-items-center fs-3 gap-3">
                    <i class="bi bi-card-checklist"></i>
                    <select class="form-select form-select-md" v-model="selectedCrypto" @change="emitCoin" id="cryptocurrency">
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
                <ButtonComponent text="Comprar" id="btn-custom" class="btn btn-lg"/>
            </form>
        </section>
    </div>
</template>

<script>
import InputTransactionComponent from '@/components/InputTransactionComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { useAuthStore } from '@/stores/auth.js';
import { storeToRefs } from 'pinia';
import { calculateAmount, validateData } from './TransactionsView';
import { buyCrypto } from '@/Services/transactions';
import dayjs from 'dayjs';

export default {
  components: {
    InputTransactionComponent,
    ButtonComponent
  },
  data() {
    return {
      selectedCrypto: "",
      amount: null,
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

    return {
      user
    };
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

      await validateData(this.amount, this.price, this.selectedCrypto);
    
      const formattedDate = dayjs().format('DD-MM-YYYY HH:mm');

      const transactionBody = {
        user_id: this.user,
        action: "purchase",
        crypto_code: this.selectedCrypto,
        crypto_amount: this.amount,
        money: this.price,
        datetime: formattedDate
      };

      try {
        const response = await buyCrypto(transactionBody);
        console.log('Transacción exitosa:', response);
      } catch (error) {
        console.error('Error al realizar la transacción:', error);
      }
    }

  }
};
</script>

<style>
.transactions-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 3em;
}
.sale-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.input-box{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid black; */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    gap: 2em;
    width: 20%;
    height: 70vh;
}
input{
    width: 10%;
}
</style>

