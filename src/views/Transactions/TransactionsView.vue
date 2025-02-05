<template>
    <div class="transactions-box">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <div class="toogleBox">
          <span @click="updateActions" class="toogle" id="buyToogle" data-type="Compra">Compra</span>
          <span @click="updateActions" class="toogle" id="sellToogle" data-type="Venta">Venta</span>
        </div>
      </div>
      <!-- <div class="d-flex justify-content-center align-items-center mb-5">
        <select class="form-select form-select-sm w-25" v-model="transactionType">
          <option value="" disabled>Selecciona una opción</option>
          <option v-for="(action, i) in actions" :key="i" :value="action.name">
            {{ action.name }}
          </option>
        </select>
      </div> -->
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
        {name: "Compra"},
        {name: "Venta"}
      ],
    };
  },
  // watch: {
  //   transactionType: "updateActions"
  // },
  methods: {
    updateActions(event){

      this.transactionType = event.target.dataset.type;

      if(this.transactionType == "Compra"){
        this.purchase = true
        this.sale = false
      }
      else if(this.transactionType === "Venta"){
        this.sale = true
        this.purchase = false
      }

      // this.$emit('selected-action', this.transactionType)
    },
    // handleAction(event){
    //   this.transactionType = event.target.dataset.type;

      
    //   alert(action)
    // }
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
.toogleBox{
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  width: 20%;
  height: 5vh;
}
.toogle{
  /* border-right: 1px solid black; */
  border-radius: 15px;
  width: 48%;
  height: 4vh;
  cursor: pointer;
  align-content: center;
}
.toogle:hover{
  background-color: #9f99ff;
  color: white;
}
#buyToogle{
  border-right: 1px solid black;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
#sellToogle{
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>

