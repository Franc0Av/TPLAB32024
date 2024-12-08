<template>
    <div class="transactions-box">
        <section class="sale-box">
            <h2>Nueva Compra</h2>
            <form @submit.prevent="submitForm" class="input-box">
                <label for="cryptocurrency">Selecciona una criptomoneda:</label>
                <select class="form-select form-select-sm w-25" v-model="selectedCrypto" @change="emitCoin" id="cryptocurrency">
                  <option value="" disabled>Selecciona una opción</option>
                <option v-for="crypto in cryptocurrencies" :key="crypto.id" :value="crypto.name">
                {{ crypto.name }}
                </option>
                </select>
                <InputTransactionComponent @inputChanged="handleAmount" />
                <InputTransactionComponent type="pay" v-model="price" />
                <ButtonComponent text="Comprar" class="btn btn-primary"/>
            </form>
        </section>

        <!-- <section>
            <h2>
                Nueva Venta
            </h2>
            <div class="input-box">
                <input type="text" required>
                <input type="number" required>
                <input type="number" required>
                <button>Vender</button>
            </div>
        </section> -->
    </div>
</template>

<script>
import InputTransactionComponent from '@/components/InputTransactionComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { calculateAmount } from './TransactionsView';

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
        { id: 4, name: "SOL" }
      ]
    };
  },
  methods: {
    handleAmount(value) {
      this.amount = value;
    },
    async submitForm() {
      const data = await calculateAmount(this.amount, this.selectedCrypto)
      this.price = data
      console.log(data)
    },
  }
};
</script>

<style>
.transactions-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    gap: 1em;
    width: 50%;
}
input{
    width: 10%;
}
</style>

