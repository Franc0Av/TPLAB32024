<template>
    <div class="transactions-box">
        <section class="sale-box">
            <h2>Nueva Compra</h2>
            <form @submit.prevent="submitForm" class="input-box">
                <label for="cryptocurrency">Selecciona una criptomoneda:</label>
                <select v-model="selectedCrypto" id="cryptocurrency">
                <option v-for="crypto in cryptocurrencies" :key="crypto.id" :value="crypto.name">
                {{ crypto.name }}
                </option>
                </select>
                <input type="number" required>
                <input type="number" required>
                <button type="submit">Comprar</button>
            </form>
        </section>

        <section>
            <h2>
                Nueva Venta
            </h2>
            <div class="input-box">
                <input type="text" required>
                <input type="number" required>
                <input type="number" required>
                <button>Vender</button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCrypto: "",
      cryptocurrencies: [
        { id: 1, name: "BTC" },
        { id: 2, name: "ETH" },
        { id: 3, name: "USDT" },
        { id: 4, name: "SOL" }
      ]
    };
  },
  methods: {
    submitForm() {
      alert(`Has seleccionado: ${this.selectedCrypto}`);
      // Aquí puedes realizar la lógica para procesar la compra
    }
  }
};
</script>

<style>
.transactions-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
/* .sale-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
} */
.input-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    gap: 1em;
}
input{
    width: 10%;
}
</style>

