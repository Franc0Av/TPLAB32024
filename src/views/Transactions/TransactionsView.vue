<template>
    <div class="transactions-box">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <select class="form-select form-select-sm w-25" v-model="transactionType">
          <option value="" disabled>Selecciona una opción</option>
          <option v-for="action in actions" :key="action.id" :value="action.name">
            {{ action.name }}
          </option>
        </select>
      </div>
      <FormComponent :transactionType="transactionType" actionTitle="Nueva Compra" v-if="purchase" />
      <FormComponent :transactionType="transactionType" actionTitle="Nueva Venta" v-else-if="sale" />
    </div>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue';

export default {
  components: {
    FormComponent
  },
  data() {
    return {
      transactionType: "",
      purchase: false,
      sale: false,
      actions: [
        {id: 1, name: "Compra"},
        {id: 2, name: "Venta"}
      ],
    };
  },
  watch: {
    transactionType: "updateActions"
  },
  methods: {
    async updateActions(){
      if(this.transactionType == "Compra"){
        this.purchase = true
        this.sale = false
      }
      else if(this.transactionType === "Venta"){
        this.sale = true
        this.purchase = false
      }

      this.$emit('selected-action', this.transactionType)
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
.form-box{
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

